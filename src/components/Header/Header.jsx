import React from "react";
import "./Header.css";
import logoSmile from "../../images/logoSmile.svg";
import logoMan from "../../images/logMan.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <div className="header__nav-movies">
          <img
            src={logoSmile}
            className="header__logoSmile"
            alt="Логотип с улыбкой"
          />
          <nav className="header__films">
            <Link className="header__link-movie" to="">
              Фильмы
            </Link>
            <Link className="header__link-movie" to="">
              Сохраненные фильмы
            </Link>
          </nav>
        </div>

        <div className="header__nav-account">
          <Link className="header__link-account" to="">
            Аккаунт
          </Link>
          <img
            src={logoMan}
            className="header__logo-man"
            alt="Логотип с человеком"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
