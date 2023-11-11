import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ menuActive, setActive }) => {
  return (
    <div
      className={
        menuActive ? "burger-button burger-button_active" : "burger-button"
      }
      onClick={() => setActive(!menuActive)}
    >
      <span />
    </div>
  );
};

export default BurgerButton;

// className={menuActive ? "burger-button burger-button_active" : "burger-button"}
