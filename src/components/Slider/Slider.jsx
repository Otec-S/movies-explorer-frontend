import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <label className ="switch">
      <input type="checkbox" />
      <span className="slider round"/>
    </label>
  );
};

export default Slider;
