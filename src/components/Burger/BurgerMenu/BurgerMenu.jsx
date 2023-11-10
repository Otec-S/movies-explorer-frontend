import React from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import logoMan from "../../../images/logManWhite.jpg";

const BurgerMenu = ({ menuActive, setActive }) => {
  return (
    <nav className={menuActive ? "burger-menu active" : "burger-menu"}>
      {/* <div className="blur" /> */}
      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          <li className="burger-menu__list-item">Главная</li>
          <li className="burger-menu__list-item">Фильмы</li>
          <li className="burger-menu__list-item">Сохраненные фильмы</li>
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
