import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ menuActive, setActive }) => {
  
  return (
    <div className="burger__button" onClick={() => setActive(!menuActive)}>
      <span />
    </div>
  );
};

export default BurgerButton;
