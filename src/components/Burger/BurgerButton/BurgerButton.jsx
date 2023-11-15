import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ isRegistered, menuActive, setActive }) => {
  return (
    <>
      {isRegistered ? (
        <div
          className={
            menuActive ? "burger-button burger-button_active" : "burger-button"
          }
          onClick={() => {
            if (document.body.style.overflow === "hidden") {
              document.body.style.overflow = " visible";
            } else {
              document.body.style.overflow = "hidden";
            }
            setActive(!menuActive);
          }}
        >
          <span />
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default BurgerButton;
