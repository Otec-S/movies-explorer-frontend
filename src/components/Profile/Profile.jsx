import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import LineGrey from "../LineGrey/LineGrey";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { updateProfile } from "../../utils/MainApi";

const Profile = ({
  menuActive,
  setActive,
  isRegistered,
  isPromo,
  handleUnLogin,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  handleFormValidation,
  errorServerMessage,
  setErrorServerMessage,
  setEmail,
  setUserName,
}) => {
  //userName и email берем из контекста
  const {
    userName: initialUserName,
    email: initialEmail,
    password,
  } = useContext(CurrentUserContext);
  //устанавливаем состояние редактирования
  const [isEditing, setIsEditing] = useState(false);
  //состояние измененного имени
  const [editedUserName, setEditedUserName] = useState(initialUserName);
  //состояние измененного email
  const [editedEmail, setEditedEmail] = useState(initialEmail);
  //активна ли кнопка Сохранить
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  // При изменении editedUserName или editedEmail вызываем handleFormValidation для живой валидации
  // useEffect(() => {
  //   handleFormValidation();
  // }, [editedUserName, editedEmail]);



  //нажатие на кнопку Редактировать переводит стейт режима редактирования в true, то есть включает этот режим
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //обработка клика по кнопке Сохранить

  const handleSaveClick = async () => {
    try {
      const response = await updateProfile(editedUserName, editedEmail);
      console.log("updateProfileResponse", response);

      if (response.ok) {
        //получение и запись в data данных с сервера
        const data = await response.json();
        //записываем полученные в ответе сервера пароль и почту в стейты
        setEmail(data.email);
        setUserName(data.name);

        // После успешного обновления данных:
        setIsEditing(false);
        setIsSaveButtonActive(false);
      } else {
        setErrorServerMessage("При обновлении профиля произошла ошибка.");
      }
    } catch (error) {
      console.error("error:", error);
      setErrorServerMessage("При обновлении профиля произошла ошибка.");
    }
  };

  //обработка изменений полей ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    
    //обратобка изменений в полях ввода
    if (name === "userName") {
      setEditedUserName(value);
    } else if (name === "email") {
      setEditedEmail(value);
    }

    //проверка, нужно ли активировать кнопку Сохранить
    //передается true если вводимые значения полей отличаются от прежних
    setIsSaveButtonActive(
      ((name === "userName" && value !== initialUserName) ||
        (name === "email" && value !== initialEmail))
    //     // &&
    //     // isNameValid &&
    //     // isEmailValid
    );

    //проверка, нужно ли активировать кнопку Сохранить
  //передается true если вводимые значения полей отличаются от прежних
  // setIsSaveButtonActive((prev) => {
  //   return (
  //     ((name === "userName" && value !== initialUserName) ||
  //       (name === "email" && value !== initialEmail)) && prev
  //   );
  // });

    // handleFormValidation(event);

    // console.log("isNameValid", isNameValid);
    // console.log("isEmailValid", isEmailValid);
    // console.log("isSaveButtonActive", isSaveButtonActive);

  };

  // console.log("isNameValid", isNameValid);
  // console.log("isEmailValid", isEmailValid);
  // console.log("setIsSaveButtonActive()", setIsSaveButtonActive());

  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main className="profile">
        <h1 className="profile__greetings">{`Привет, ${initialUserName}!`}</h1>
        <form action="" className="profile__form" noValidate>
          <label htmlFor="userName" className="profile__form__label">
            Имя
            <input
              type="text"
              id="userName"
              name="userName"
              className="profile__form__input"
              value={isEditing ? editedUserName : initialUserName}
              onChange={handleInputChange}
              readOnly={!isEditing}
              required
              autoComplete="off"
            />
          </label>
          <span className="profile__form__input__error-msg">
            {isNameValid === false &&
              "Введите корректное имя (латиница, кириллица, пробел или дефис)"}
          </span>
          <div className="profile__form__linegrey">
            <LineGrey />
          </div>

          <label htmlFor="email" className="profile__form__label">
            E&shy;mail
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleInputChange}
              className="profile__form__input"
              value={isEditing ? editedEmail : initialEmail}
              readOnly={!isEditing}
              required
              autoComplete="off"
            />
          </label>
          <span className="profile__form__input__error-msg">
            {isEmailValid === false && "Введите корректный email"}
          </span>
        </form>

        {isEditing ? (
          <button
            type="submit"
            className={`profile__save-btn ${
              !isSaveButtonActive && "profile__save-btn_disabled"
            }`}
            onClick={handleSaveClick}
            disabled={!isSaveButtonActive}
          >
            Сохранить
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="profile__update-btn"
              onClick={handleEditClick}
            >
              Редактировать
            </button>
            <button className="profile__logout-btn" onClick={handleUnLogin}>
              Выйти из аккаунта
            </button>
          </>
        )}

        {/* <button
            type="button"
            className="profile__edit-btn"
            onClick={handleEditClick}
          >
            Редактировать
          </button> */}
      </main>
    </>
  );
};

export default Profile;
