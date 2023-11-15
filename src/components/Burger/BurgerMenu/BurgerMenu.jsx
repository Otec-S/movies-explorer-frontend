import React from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import logoMan from "../../../images/logManWhite.jpg";

const BurgerMenu = ({ menuActive }) => {
  return (
    <nav
      className={menuActive ? "burger-menu burger-menu_active" : "burger-menu"}
    >
      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          <li className="burger-menu__list-item">
            <Link className="burger-menu__list-item-link" to="">
              Главная
            </Link>
          </li>
          <li className="burger-menu__list-item">
            <Link className="burger-menu__list-item-link" to="">
              Фильмы
            </Link>
          </li>
          <li className="burger-menu__list-item">
            <Link className="burger-menu__list-item-link" to="">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
      </div>
      <div className="burger-menu__account">
        <Link className="burger-menu__account-link" to="">
          Аккаунт
        </Link>
        <img
          src={logoMan}
          className="burger-menu__account-logo-man"
          alt="Логотип с человеком"
        />
      </div>
    </nav>
  );
};

export default BurgerMenu;
