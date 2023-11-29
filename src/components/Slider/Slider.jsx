import React from "react";
import "./Slider.css";

//принимает параметром функцию, которая срабатывает при изменении состояния чекбокса
const Slider = ({handleCheckboxChange}) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={handleCheckboxChange} />
      <span className="slider round" />
    </label>
  );
};

export default Slider;
