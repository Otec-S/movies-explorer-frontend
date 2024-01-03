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
            // удаление и возвращение скролла
            // if (document.body.style.overflow === "hidden") {
            //   document.body.style.overflow = " visible";
            // } else {
            //   document.body.style.overflow = "hidden";
            // }
            //при клике на крестик меню оно закрывается
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
