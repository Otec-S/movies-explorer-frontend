import React, { useState } from "react";
import "./WelcomeForm.css";
import { Link } from "react-router-dom";
import MainLink from "../MainLink/MainLink";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const WelcomeForm = ({
  greetings,
  isNewUser,
  buttonText,
  welcomeQuestion,
  welcomeLink,
  welcomeLinkName,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  handleFormValidation,
  handleUserFormSubmit,
  errorServerMessage,
}) => {
  const { userName, email, password } = React.useContext(CurrentUserContext);

  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [isNameValid, setIsNameValid] = useState(null);
  // const [isEmailValid, setIsEmailValid] = useState(null);
  // const [isPasswordValid, setIsPasswordValid] = useState(null);

  // const handleFormValidation = (event) => {
  //   const { name, value } = event.target;

  //   switch (name) {
  //     case "userName":
  //       setUserName(value);
  //       setIsNameValid(value ? /^[a-zA-Zа-яА-Я\s-]+$/.test(value) : "");
  //       break;
  //     case "email":
  //       setEmail(value);
  //       setIsEmailValid(value ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : "");
  //       break;
  //     case "password":
  //       setPassword(value);
  //       setIsPasswordValid(value ? value.length >= 4 : "");
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <main className="welcome-form">
      <div className="welcome-form__main-link">
        <MainLink />
      </div>
      <h1 className="welcome-form__greetings">{greetings}</h1>
      <form
        action=""
        className="welcome-form__form"
        onSubmit={handleUserFormSubmit}
      >
        {isNewUser && (
          <label htmlFor="name" className="welcome-form__form__label">
            Имя
            <input
              type="text"
              id="userName"
              className={`welcome-form__form__input ${
                !isNameValid ? "welcome-form__form__input_invalid" : ""
              }`}
              name="userName"
              value={userName}
              onChange={handleFormValidation}
              autoFocus
              required
            />
            <span className="welcome-form__form__input__error-msg">
              {isNameValid === false &&
                "Введите корректное имя (латиница, кириллица, пробел или дефис)"}
            </span>
          </label>
        )}

        <label htmlFor="email" className="welcome-form__form__label">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleFormValidation}
            className={`welcome-form__form__input ${
              !isEmailValid ? "welcome-form__form__input_invalid" : ""
            }`}
            required
          />
          <span className="welcome-form__form__input__error-msg">
            {isEmailValid === false && "Введите корректный email"}
          </span>
        </label>

        <label htmlFor="password" className="welcome-form__form__label">
          Пароль
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleFormValidation}
            className={`welcome-form__form__input ${
              !isPasswordValid ? "welcome-form__form__input_invalid" : ""
            }`}
            required
          />
          <span className="welcome-form__form__input__error-msg">
            {isPasswordValid === false &&
              "Пароль должен содержать не менее 4 символов"}
          </span>
        </label>

        {/* сообщение об ошибке с сервера */}
        <span className="welcome-form__button__error-msg">
          {errorServerMessage && errorServerMessage}
        </span>

        <button
          type="submit"
          className="welcome-form__button"
          disabled={
            (isNewUser && !isNameValid) || !isEmailValid || !isPasswordValid
          }
        >
          {buttonText}
        </button>
      </form>

      <div className="welcome-form__question">
        {welcomeQuestion}
        <Link to={welcomeLink} className="welcome-form__link">
          {welcomeLinkName}
        </Link>
      </div>
    </main>
  );
};

export default WelcomeForm;
