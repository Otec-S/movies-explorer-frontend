import React from "react";
import "./SaveCheckbox.css";

const SaveCheckbox = () => {
  return (
    <label className="save-checkbox-container">
      <input type="checkbox" />
      <span className="save-checkbox-checkmark" />
    </label>
  );
};

export default SaveCheckbox;
