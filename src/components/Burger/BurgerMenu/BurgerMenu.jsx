import React, { useEffect } from "react";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import logoMan from "../../../images/logManWhite.jpg";

const BurgerMenu = ({ menuActive, setActive }) => {

  // Закрытие бургер-меню по нажатию на Escape
  useEffect(() => {

    const handleEscape = (event) => {
      if (event.key === "Escape" && menuActive) {
        setActive(!menuActive);
      }
    };

    // Добавление слушателя события клавиатуры
    document.addEventListener("keydown", handleEscape);

    // Удаление слушателя при размонтировании компонента
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  },[menuActive]);

  return (
    <nav
      className={menuActive ? "burger-menu burger-menu_active" : "burger-menu"}
    >
      <div
        className="burger-menu__blackout"
        onClick={() => setActive(!menuActive)}
      />

      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          <li className="burger-menu__list-item">
            <NavLink
              className={({ isActive }) =>
                `burger-menu__list-item-link ${
                  isActive && "burger-menu__link_active"
                }`
              }
              to="/"
              onClick={() => setActive(!menuActive)}
            >
              Главная
            </NavLink>
          </li>

          <li className="burger-menu__list-item">
            <NavLink
              className={({ isActive }) =>
                `burger-menu__list-item-link ${
                  isActive && "burger-menu__link_active"
                }`
              }
              to="/movies"
              onClick={() => setActive(!menuActive)}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__list-item">
            <NavLink
              className={({ isActive }) =>
                `burger-menu__list-item-link ${
                  isActive && "burger-menu__link_active"
                }`
              }
              to="/saved-movies"
              onClick={() => setActive(!menuActive)}
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>

        <div className="burger-menu__account">
          <NavLink
            className={({ isActive }) =>
              `burger-menu__account-link ${
                isActive && "burger-menu__link_active"
              }`
            }
            to="/profile"
            onClick={() => setActive(!menuActive)}
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
