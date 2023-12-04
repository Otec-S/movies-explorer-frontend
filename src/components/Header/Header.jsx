import React from "react";
import "./Header.css";
import BurgerButton from "../Burger/BurgerButton/BurgerButton";
import BurgerMenu from "../Burger/BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";
import MainLink from "../MainLink/MainLink";

const Header = ({ isRegistered, menuActive, setActive, isPromo }) => {
  return (
    <header className={isPromo ? "header-promo" : "header"}>
      <MainLink />
      <div className="header__nav-container">
        <Navigation isRegistered={isRegistered} isPromo={isPromo} />
        <BurgerButton
          isRegistered={isRegistered}
          menuActive={menuActive}
          setActive={setActive}
        />
      </div>
      <BurgerMenu menuActive={menuActive} setActive={setActive}/>
    </header>
  );
};

export default Header;
