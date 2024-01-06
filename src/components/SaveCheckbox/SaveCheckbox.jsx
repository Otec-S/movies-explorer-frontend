import React from "react";
import "./SaveCheckbox.css";

//передаем как пропс функцию onSave
const SaveCheckbox = ({ isChecked, handleCheckboxClick }) => {

  return (
    <label className="save-checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxClick}
      />
      <span className="save-checkbox-checkmark" />
    </label>
  );
};

export default SaveCheckbox;
