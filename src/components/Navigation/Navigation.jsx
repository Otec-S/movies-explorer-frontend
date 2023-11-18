import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logoMan from "../../images/logMan.jpg";
import logoManWhite from "../../images/logManWhite.jpg";

const Navigation = ({ isRegistered, isPromo }) => {
  return (
    <>
      {isRegistered ? (
        <div className="navigation_registered">
          <nav className="navigation__films">
            <Link
              className={
                isPromo ? "navigation__link-promo" : "navigation__link"
              }
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className={
                isPromo ? "navigation__link-promo" : "navigation__link"
              }
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </nav>

          <nav className="navigation__account">
            <Link
              className={
                isPromo
                  ? "navigation__account__link-promo"
                  : "navigation__account__link"
              }
              to="/profile"
            >
              Аккаунт
            </Link>

            {isPromo ? (
              <img
                src={logoMan}
                className="navigation__account__logo-man"
                alt="Логотип с человеком"
              />
            ) : (
              <img
                src={logoManWhite}
                className="navigation__account__logo-man"
                alt="Логотип с человеком"
              />
            )}
          </nav>
        </div>
      ) : (
        <div className="navigation_unregistered">
          <nav className="navigation__account ">
            <Link className="navigation__account__link" to="/signup">
              Регистрация
            </Link>
            <button className="navigation__account__entrance-button">
              Войти
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
