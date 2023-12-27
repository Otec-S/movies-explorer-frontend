import React, { useEffect, useState } from "react";
import "./SavedMoviesSearchForm.css";
import loupeIcon from "../../images/loupe-icon.svg";
import LineGrey from "../LineGrey/LineGrey";
import Slider from "../Slider/Slider";

const SavedMoviesSearchForm = ({
  allSavedMovies,
  setFilteredSavedMoviesArray,
  isSavedSearchFormEmpty,
  setIsSavedSearchFormEmpty,
  savedMovieSearchQuery,
  setSavedMovieSearchQuery,
  setIsSearching,
  handleSavedCheckboxChange,
  isShortSavedMovieChecked,
}) => {
  // стейт для отображения состояния фильтрации фильмов
  const [isFiltering, setIsFiltering] = useState(false);

  //установление значения стейта movieSavedSearchQuery из значения поля поискового ввода
  function handleChangeSavedMovieSearchQuery(e) {
    e.preventDefault();
    setSavedMovieSearchQuery(e.target.value);
  }

  //функция фильтации массива Сохраненных фильмов по слову из строки поиска и запись в стейт найденных фильмов
  const searchSavedMovies = () => {
    setIsFiltering(true);
    const filtered = allSavedMovies.filter(
      (item) =>
        item.nameRU
          .toLowerCase()
          .includes(savedMovieSearchQuery.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(savedMovieSearchQuery.toLowerCase())
    );
    setFilteredSavedMoviesArray(filtered);
  };

  //функция срабатывает по клику на кнопку поиска - отправляется форма поиска
  const handleSavedSearchFormSubmit = (e) => {
    e.preventDefault();
    setIsFiltering(false);
    setIsSearching(true);
    if (savedMovieSearchQuery) {
      setIsSavedSearchFormEmpty(false);
      searchSavedMovies();
    } else {
      setIsSearching(false);
      setIsSavedSearchFormEmpty(true);
      return;
    }
  };

  useEffect(() => {
    if (!isFiltering) {
      setFilteredSavedMoviesArray([]);
    }
  }, [isFiltering, savedMovieSearchQuery, setFilteredSavedMoviesArray]);

  return (
    <section className="search-form">
      <form className="input" onSubmit={handleSavedSearchFormSubmit} noValidate>
        <img
          className="input__loupe-icon"
          src={loupeIcon}
          alt="Иконка с лупой"
        />
        <input
          name="saved-movies-search-field"
          id="saved-movies-search-field"
          className="input__entry-field"
          type="search"
          placeholder="Фильм"
          required
          autoFocus
          value={savedMovieSearchQuery}
          onChange={handleChangeSavedMovieSearchQuery}
        />
        <button type="submit" className="input__find-button"></button>
      </form>

      <LineGrey />

      <div className="input__place-for-error-message">
        {isSavedSearchFormEmpty && (
          <span className="input__error-message">
            Нужно ввести ключевое слово
          </span>
        )}
      </div>
      <div className="short-films">
        <Slider
          handleCheckboxChange={handleSavedCheckboxChange}
          isShortMovieChecked={isShortSavedMovieChecked}
        />
        <span className="short-films__text">Короткометражки</span>
      </div>
    </section>
  );
};

export default SavedMoviesSearchForm;
