import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";
import MainLink from "../MainLink/MainLink";

const Register = () => {
  return (
    <main className="register">
      <MainLink />
      <h1 className="register__greetings">Добро пожаловать!</h1>
      <form action="" className="register__form">
        <label for="name" className="register__form__label">
          Имя
          <input type="text" id="name" className="register__form__input" name="name" required/>
        </label>
        <label for="email" className="register__form__label">
          E-mail
          <input type="email" id="email" name="email" className="register__form__input" required/>
        </label>
        <label for="password" className="register__form__label">
          Пароль
          <input type="password" id="password" name="password" className="register__form__input" required/>
          <span className="register__form__input__error-msg">Что-то пошло не так...</span>
        </label>
      </form>
      <button type="submit" className="register__button">
        Зарегистрироваться
      </button>
      <div className="register__question">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
    </main>
  );
};

export default Register;
