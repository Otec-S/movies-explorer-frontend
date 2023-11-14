import React, { useState } from "react";
import "./Header.css";
import logoSmile from "../../images/logoSmile.svg";
import logoMan from "../../images/logMan.jpg";
import { Link } from "react-router-dom";
import BurgerButton from "../Burger/BurgerButton/BurgerButton";
import BurgerMenu from "../Burger/BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

const Header = ({ isRegistered, menuActive, setActive }) => {
  // const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="header">
      {/* лого с улыбкой */}
      <img
        src={logoSmile}
        className="header__logoSmile"
        alt="Логотип с улыбкой"
      />

      <div className="header__nav-container">

       <Navigation isRegistered={true}/>

      </div>
      <BurgerButton menuActive={menuActive} setActive={setActive} />
      <BurgerMenu menuActive={menuActive} setActive={setActive} />
    </header>
  );
};

export default Header;
