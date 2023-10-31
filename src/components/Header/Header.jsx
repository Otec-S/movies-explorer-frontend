import React from "react";
import "./Header.css";
import logoSmile from "../../images/logoSmile.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-movies">
          <img src={logoSmile} className="header__logoSmile" alt="Логотип с улыбкой" />
          <nav className="header__films">фильмы</nav>
        </div>
        <div className="header__nav-account">
          header__nav-account
          <div className="header__account"></div>
          <div className="header__logo-man"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
