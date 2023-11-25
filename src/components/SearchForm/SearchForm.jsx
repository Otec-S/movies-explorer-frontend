import React from "react";
import "./SearchForm.css";
import loupeIcon from "../../images/loupe-icon.svg";
import LineGrey from "../LineGrey/LineGrey";
import Slider from "../Slider/Slider";

const SearchForm = ({
  initialSetAllMovies,
  movieSearchQuery,
  searchMovies,
}) => {
  return (
    <section className="search-form">
      <form className="input" >
        <img
          className="input__loupe-icon"
          src={loupeIcon}
          alt="Иконка с лупой"
        />
        <input
          name="movies-search-field"
          className="input__entry-field"
          type="search"
          placeholder="Фильм"
          required
          autoFocus
          value={movieSearchQuery}
          onChange={searchMovies}
        />
        <button
          // type="submit"
          // onSubmit={handleSubmit}
          onClick={initialSetAllMovies}
          className="input__find-button"
        ></button>
      </form>
      <LineGrey />
      <div className="short-films">
        <Slider />
        <span className="short-films__text">Короткометражки</span>
      </div>
    </section>
  );
};

export default SearchForm;
