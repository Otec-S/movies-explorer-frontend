import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logoSmile from "../../images/logoSmile.svg";
import logoMan from "../../images/logMan.jpg";

const Navigation = ({ isRegistered }) => {
  return (
    <>
      {isRegistered ? (
        <div className="navigation_registered">
          <nav className="navigation__films">
            <Link className="navigation__link" to="">
              Фильмы
            </Link>
            <Link className="navigation__link" to="">
              Сохраненные фильмы
            </Link>
          </nav>

          <div className="navigation__account">
            <Link className="navigation__account__link" to="">
              Аккаунт
            </Link>
            <img
              src={logoMan}
              className="navigation__account__logo-man"
              alt="Логотип с человеком"
            />
          </div>
        </div>
      ) : (
        <div className="navigation_unregistered">
          <div className="navigation__account ">
            <Link className="navigation__account__link" to="">
              Регистрация
            </Link>
            <button className="navigation__account__entrance-button">
              Войти
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
