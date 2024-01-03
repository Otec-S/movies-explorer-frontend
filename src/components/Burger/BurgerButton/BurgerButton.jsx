import React, { useEffect } from "react";
import "./BurgerButton.css";

const BurgerButton = ({ isRegistered, menuActive, setActive }) => {
  //хук включат функцию переключения видимости скролла в зависимости от активности меню Бургера. если активно - включает. если нет - меню размонтируется и функция выключается
  useEffect(() => {
    const handleOverflow = () => {
      document.body.classList.toggle("overflow-hidden", menuActive);
    };
    handleOverflow();

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuActive]);

  const toggleBurgerMenu = () => {
    setActive(!menuActive);
  };

  return (
    <>
      {isRegistered ? (
        <div
          className={
            menuActive ? "burger-button burger-button_active" : "burger-button"
          }
          onClick={toggleBurgerMenu}
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
