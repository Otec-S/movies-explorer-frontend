import React, { useState } from "react";
import "./Header.css";
import logoSmile from "../../images/logoSmile.svg";
import logoMan from "../../images/logMan.jpg";
import { Link } from "react-router-dom";
import BurgerButton from "../Burger/BurgerButton/BurgerButton";
import BurgerMenu from "../Burger/BurgerMenu/BurgerMenu";

const Header = ({ isRegistered }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="header__nav">
        {isRegistered ? (
          <>
            {/* <div className="header__nav-movies">
              <img
                src={logoSmile}
                className="header__logoSmile"
                alt="Логотип с улыбкой"
              />
              <nav className="header__films">
                <Link className="header__link" to="">
                  Фильмы
                </Link>
                <Link className="header__link" to="">
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
            </div> */}
            
            <div className="header__nav-movies">
              <img
                src={logoSmile}
                className="header__logoSmile"
                alt="Логотип с улыбкой"
              />
             
              <nav className="header__films">
                <Link className="header__link" to="">
                  Фильмы
                </Link>
                <Link className="header__link" to="">
                  Сохраненные фильмы
                </Link>
              </nav>
            </div>

            <div className="header__nav-account header__nav-account_is-registered">
              <Link className="header__link-account" to="">
                Аккаунт
              </Link>
              <img
                src={logoMan}
                className="header__logo-man"
                alt="Логотип с человеком"
              />
            </div>
            <BurgerButton
                menuActive={isMenuActive}
                setActive={setIsMenuActive}
              />
          </>
        ) : (
          <>
            <div className="header__nav-movies">
              <img
                src={logoSmile}
                className="header__logoSmile"
                alt="Логотип с улыбкой"
              />
            </div>

            <div className="header__nav-account">
              <Link className="header__link" to="">
                Регистрация
              </Link>
              <button className="header__entrance-button">Войти</button>
            </div>
          </>
        )}
      </div>
      <BurgerMenu menuActive={isMenuActive} setActive={setIsMenuActive} />
    </header>
  );
};

export default Header;
