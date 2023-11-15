import React, { useState } from "react";
import "./Header.css";
import logoSmile from "../../images/logoSmile.svg";
import logoMan from "../../images/logMan.jpg";
import { Link } from "react-router-dom";
import BurgerButton from "../Burger/BurgerButton/BurgerButton";
import BurgerMenu from "../Burger/BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

const Header = ({ isRegistered, menuActive, setActive }) => {
  return (
    <header className="header">
      <img
        src={logoSmile}
        className="header__logoSmile"
        alt="Логотип с улыбкой"
      />

      <div className="header__nav-container">
        <Navigation isRegistered={isRegistered} />
        <BurgerButton isRegistered={isRegistered} menuActive={menuActive} setActive={setActive} />
      </div>
      <BurgerMenu menuActive={menuActive} />
    </header>
  );
};

export default Header;
