import React, { useContext } from "react";
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
  handleLoginFormSubmit,
  handleRegisterFormSubmit,
  errorServerMessage,
  // setErrorServerMessage
}) => {
  const { userName, email, password } = useContext(CurrentUserContext);

  return (
    <main className="welcome-form">
      <div className="welcome-form__main-link">
        <MainLink />
      </div>
      <h1 className="welcome-form__greetings">{greetings}</h1>
      <form
        action=""
        className="welcome-form__form"
        onSubmit={isNewUser ? handleRegisterFormSubmit : handleLoginFormSubmit}
        noValidate
      >
        {isNewUser && (
          <label htmlFor="userName" className="welcome-form__form__label">
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
            autoFocus={!isNewUser}
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
          // onClick={setErrorServerMessage("")}
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
