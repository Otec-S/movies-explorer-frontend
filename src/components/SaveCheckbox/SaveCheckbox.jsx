import React from "react";
import "./SaveCheckbox.css";

const SaveCheckbox = () => {
  return (
    <label class="save-checkbox-container">
      <input type="checkbox" />
      <span class="save-checkbox-checkmark" />
    </label>
  );
};

export default SaveCheckbox;
