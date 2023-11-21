import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logoMan from "../../images/logMan.jpg";
import logoManWhite from "../../images/logManWhite.jpg";

const Navigation = ({ isRegistered, isPromo }) => {
  return (
    <>
      {isRegistered ? (
        <div className="navigation_registered">
          <nav className="navigation__films">
            <NavLink
              className={({ isActive }) =>
                isPromo
                  ? `navigation__link-promo ${
                      isActive ? "navigation__link_active" : ""
                    }`
                  : `navigation__link ${
                      isActive ? "navigation__link_active" : ""
                    }`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isPromo
                  ? `navigation__link-promo ${
                      isActive ? "navigation__link_active" : ""
                    }`
                  : `navigation__link ${
                      isActive ? "navigation__link_active" : ""
                    }`
              }
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </nav>

          <nav className="navigation__account">
            <NavLink
              className={({ isActive }) =>
                isPromo
                  ? `navigation__account__link-promo ${
                      isActive ? "navigation__link_active" : ""
                    }`
                  : `navigation__account__link ${
                      isActive ? "navigation__link_active" : ""
                    }`
              }
              to="/profile"
            >
              Аккаунт
            </NavLink>

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

            <Link to="/signin">
              <button className="navigation__account__entrance-button">
                Войти
              </button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
