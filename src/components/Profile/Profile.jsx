import React, { useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import LineGrey from "../LineGrey/LineGrey";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

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
}) => {
  const { userName, email, password } = useContext(CurrentUserContext);

  console.log('userName', userName);

  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main className="profile">
        <h1 className="profile__greetings">{`Привет, ${userName}!`}</h1>
        <form action="" className="profile__form" noValidate>
          <label htmlFor="name" className="profile__form__label">
            Имя
            <input
              type="text"
              id="userName"
              name="userName"
              className={`profile__form__input ${
                !isNameValid ? "profile__form__input_invalid" : ""
              }`}
              value={userName}
              onChange={handleFormValidation}
              required
            />
            {/* TODO!!!!!!!!!!!!!!!! */}
            <span className="welcome-form__form__input__error-msg">
              {isNameValid === false &&
                "Введите корректное имя (латиница, кириллица, пробел или дефис)"}
            </span>
          </label>
          <div className="profile__form__linegrey">
            <LineGrey />
          </div>

          <label htmlFor="" className="profile__form__label">
            E&shy;mail
            <input
              type="text"
              className="profile__form__input"
              value={email}
              required
            />
          </label>
        </form>
        <button type="submit" className="profile__update-btn">
          Редактировать
        </button>
        <button className="profile__logout-btn" onClick={handleUnLogin}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
};

export default Profile;
