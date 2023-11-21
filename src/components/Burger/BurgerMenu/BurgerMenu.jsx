import React from "react";
import "./BurgerMenu.css";
import { Link, NavLink } from "react-router-dom";
import logoMan from "../../../images/logManWhite.jpg";

const BurgerMenu = ({ menuActive }) => {
  return (
    <nav
      className={menuActive ? "burger-menu burger-menu_active" : "burger-menu"}
    >
      <div className="burger-menu__blackout" />

      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          <li className="burger-menu__list-item">
            <NavLink
              className={({ isActive }) =>
                `burger-menu__list-item-link ${
                  isActive ? "burger-menu__link_active" : ""
                }`
              }
              to="/"
            >
              Главная
            </NavLink>
          </li>

          {/* className={({ isActive }) =>
                isPromo
                  ? `navigation__account__link-promo ${
                      isActive ? "navigation__link_active" : ""
                    }`
                  : `navigation__account__link ${
                      isActive ? "navigation__link_active" : ""
                    }`
              } */}
          <li className="burger-menu__list-item">
            <NavLink
              className={({ isActive }) =>
                `burger-menu__list-item-link ${
                  isActive ? "burger-menu__link_active" : ""
                }`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__list-item">
            <NavLink
              className={({ isActive }) =>
                `burger-menu__list-item-link ${
                  isActive ? "burger-menu__link_active" : ""
                }`
              }
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>

        <div className="burger-menu__account">
          <NavLink
            className={({ isActive }) =>
              `burger-menu__account-link ${
                isActive ? "burger-menu__link_active" : ""
              }`
            }
            to="/profile"
          >
            Аккаунт
          </NavLink>
          <img
            src={logoMan}
            className="burger-menu__account-logo-man"
            alt="Логотип с человеком"
          />
        </div>
      </div>
    </nav>
  );
};

export default BurgerMenu;
