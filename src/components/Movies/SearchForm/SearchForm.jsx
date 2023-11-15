import React from "react";
import "./SearchForm.css";
import loupeIcon from '../../../images/loupe-icon.svg'
import findIcon from '../../../images/find-icon.png'
import LineGrey from "../../LineGrey/LineGrey";
import Slider from "../../Slider/Slider";


const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="input">
        <img className="input__loupe-icon" src={loupeIcon} alt="Иконка с лупой" />
        <input className="input__entry-field" type="text" placeholder="Фильм"/>
        <button className="input__find-button"></button>
      </div>
      <LineGrey/>
      <div className="short-films">
        <Slider />
        <span className="short-films__text">Короткометражки</span>
      </div>
    </div>
  );
};

export default SearchForm;
