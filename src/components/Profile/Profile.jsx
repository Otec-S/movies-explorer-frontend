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
  //userName и email берем из контекста и переназываем их в переменные initial
  const {
    userName: initialUserName,
    email: initialEmail,
    password,
  } = useContext(CurrentUserContext);

  //устанавливаем состояние редактирования
  const [isEditing, setIsEditing] = useState(false);
  //состояние отредактированного имени
  const [editedUserName, setEditedUserName] = useState(initialUserName);
  //состояние отредактированного email
  const [editedEmail, setEditedEmail] = useState(initialEmail);
  //состояние "оригинальных" переменных для отслеживания их изменения
  const [originalUserName, setOriginalUserName] = useState(initialUserName);
  const [originalEmail, setOriginalEmail] = useState(initialEmail);

  //активна ли кнопка Сохранить
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  //имя для шапки профиля из ответа сервера
  const [greetingsName, setGreetingsName] = useState(initialUserName);

  //анимация
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // При изменении editedUserName или editedEmail вызываем handleFormValidation для живой валидации
  //явно обозначаем, что такое таргет и его значение, так как из этой функции нет доступа к полю ввода
  useEffect(() => {
    handleFormValidation({
      target: { name: "userName", value: editedUserName },
    });
    handleFormValidation({ target: { name: "email", value: editedEmail } });
  }, [editedUserName, editedEmail, handleFormValidation]);

  // Проверка изменений и валидации для активации/деактивации кнопки Сохранить
  useEffect(() => {
    const isUserNameChanged = editedUserName !== originalUserName;
    const isEmailChanged = editedEmail !== originalEmail;
    setIsSaveButtonActive(
      (isUserNameChanged || isEmailChanged) && isNameValid && isEmailValid
    );
  }, [
    editedUserName,
    editedEmail,
    originalUserName,
    originalEmail,
    isNameValid,
    isEmailValid,
  ]);

  //нажатие на кнопку Редактировать переводит стейт режима редактирования в true, то есть включает этот режим и переназывает "оригинальные" переменные
  const handleEditClick = () => {
    setIsEditing(true);
    setOriginalUserName(editedUserName);
    setOriginalEmail(editedEmail);
  };

  //обработка клика по кнопке Сохранить
  const handleSaveClick = async () => {
    try {
      const response = await updateProfile(editedUserName, editedEmail);
      console.log("updateProfileResponse", response);

      if (response.ok) {
        //получение и запись в data данных с сервера
        const data = await response.json();
        console.log("data", data);

        //записываем полученные в ответе сервера имя и почту в стейты
        setEmail(data.email);
        setUserName(data.name);
        //берем имя для шапки профиля из ответа сервера
        setGreetingsName(data.name);

        // После успешного обновления данных:
        setIsEditing(false);
        setIsSaveButtonActive(false);
        setErrorServerMessage("");

        // Показываем уведомление об успешном обновлении
        setShowSuccessNotification(true);

        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
          setShowSuccessNotification(false);
        }, 3000);
      } else {
        console.log("ошибка1");
        setErrorServerMessage("При обновлении профиля произошла ошибка.");
      }
    } catch (error) {
      console.error("error:", error);
      console.log("ошибка2");
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
  };

  // обработчик нажатия на Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isSaveButtonActive) {
      // если нажата клавиша Enter и кнопка Сохранить активна, вызываем handleSaveClick
      handleSaveClick();
    }
  };

  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main className="profile">
        <h1 className="profile__greetings">{`Привет, ${greetingsName}!`}</h1>
        <form
          action=""
          className="profile__form"
          noValidate
          onKeyDown={handleKeyDown}
        >
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
        
        {/* анимация успешного обновления профиля */}
        {showSuccessNotification && (
          <div className="profile__success-notification">
            Профиль успешно обновлен!
          </div>
        )}

        {/* сообщение об ошибке с сервера */}
        <span className="profile-form__button__error-msg">
          {errorServerMessage && errorServerMessage}
        </span>

        {/* кнопки под формой */}
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
      </main>
    </>
  );
};

export default Profile;
