import React from "react";
import "./SubTitle.css";

const SubTitle = ({text}) => {
  return (
    <div>
      <h2 className="subtitle__text">{text}</h2>
      <div className="subtitle__line"></div>
    </div>
  );
};

export default SubTitle;
