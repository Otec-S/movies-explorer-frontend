import React from "react";
import "./MoreButton.css";


const MoreButton = ({addCardRows}) => {
  return (
    <div className="more-button-area">
      <button className="more-button" onClick={addCardRows}>Ещё</button>
    </div>
  );
};

export default MoreButton;
