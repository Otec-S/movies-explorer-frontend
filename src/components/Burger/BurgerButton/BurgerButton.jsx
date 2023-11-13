import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ menuActive, setActive }) => {
  return (
    <div
      className={
        menuActive ? "burger-button burger-button_active" : "burger-button"
      }
      onClick={() => {
        if(document.body.style.overflow === "hidden") {
          document.body.style.overflow = " visible"
        } else {
          document.body.style.overflow = "hidden"
        };
        setActive(!menuActive);
      }}
    >
      <span />
    </div>
  );
};

export default BurgerButton;
