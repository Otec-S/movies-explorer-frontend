import React, { useState } from "react";
import "./SearchForm.css";
import loupeIcon from "../../images/loupe-icon.svg";
import LineGrey from "../LineGrey/LineGrey";
import Slider from "../Slider/Slider";

const SearchForm = ({
  movieSearchQuery,
  setMovieSearchQuery,
  handleSearchFormSubmit,
  isLoading,
  handleCheckboxChange,
  handleClick
  
}) => {
  //установление значения стейта movieSearchQuery из значения поля поискового ввода
  function handleChangeMovieSearchQuery(e) {
    e.preventDefault();
    setMovieSearchQuery(e.target.value);
  }


  return (
    <section className="search-form">
      <form className="input" onSubmit={handleSearchFormSubmit} noValidate>
        <img
          className="input__loupe-icon"
          src={loupeIcon}
          alt="Иконка с лупой"
        />
        <input
          name="movies-search-field"
          id="movies-search-field"
          className="input__entry-field"
          type="search"
          placeholder="Фильм"
          required
          autoFocus
          value={movieSearchQuery}
          onChange={handleChangeMovieSearchQuery}
          disabled={isLoading}
        />
        <button
          type="submit"
          onClick={handleClick}
          className="input__find-button"
          disabled={!movieSearchQuery}
        ></button>
      </form>

      <LineGrey />

      <div className="input__place-for-error-message">
        {!movieSearchQuery && (
          <span className="input__error-message">
            Нужно ввести ключевое слово
          </span>
        )}
      </div>
      <div className="short-films">
        <Slider handleCheckboxChange={handleCheckboxChange}/>
        <span className="short-films__text">Короткометражки</span>
      </div>
    </section>
  );
};

export default SearchForm;
