import React from "react";
import "./WelcomeForm.css";
import { Link } from "react-router-dom";
import MainLink from "../MainLink/MainLink";

const WelcomeForm = ({
  greetings,
  isNewUser,
  buttonText,
  welcomeQuestion,
  welcomeLink,
  welcomeLinkName,
}) => {
  return (
    <main className="welcome-form">
      <div className="welcome-form__main-link">
        <MainLink />
      </div>
      <h1 className="welcome-form__greetings">{greetings}</h1>
      <form action="" className="welcome-form__form">
        {isNewUser && (
          <label htmlFor="name" className="welcome-form__form__label">
            Имя
            <input
              type="text"
              id="name"
              className="welcome-form__form__input"
              name="name"
              required
            />
          </label>
        )}

        <label htmlFor="email" className="welcome-form__form__label">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            className="welcome-form__form__input"
            required
          />
        </label>
        <label htmlFor="password" className="welcome-form__form__label">
          Пароль
          <input
            type="password"
            id="password"
            name="password"
            className="welcome-form__form__input"
            required
          />
          <span className="welcome-form__form__input__error-msg">
            Что-то пошло не так...
          </span>
        </label>
      </form>
      <span className="welcome-form__button__error-msg">
      При регистрации пользователя произошла ошибка.
      </span>
      <button type="submit" className="welcome-form__button">
        {buttonText}
      </button>
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
