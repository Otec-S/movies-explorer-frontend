import React, { useState } from "react";
import "./SaveCheckbox.css";

//передаем как пропс функцию onSave
const SaveCheckbox = ({ saveMovie, onDeleteMovie }) => {
  //вводим стейт для состояния "отмеченности" чекбокса, по умолчанию он неактивен
  const [isChecked, setIsChecked] = useState(false);

  //вводим функцию "тогла" состояния чекбокса
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);

    //активизируя функцию onSave из пропсов мы отправляем запрос на сервер для сохранения/удаления этой карточки фильма
    if (!isChecked) {
      saveMovie();
    } else {
      // onDeleteMovie();
    }
  };

  return (
    <label className="save-checkbox-container">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxClick}/>
      <span className="save-checkbox-checkmark" />
    </label>
  );
};

export default SaveCheckbox;
