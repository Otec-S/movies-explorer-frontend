import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import loupeIcon from "../../images/loupe-icon.svg";
import LineGrey from "../LineGrey/LineGrey";
import Slider from "../Slider/Slider";

const SavedMoviesSearchForm = ({
  allSavedMovies,
  filteredSavedMoviesArray,
  setFilteredSavedMoviesArray,
  isSavedSearchFormEmpty,
  setIsSavedSearchFormEmpty,
  savedMovieSearchQuery,
  setSavedMovieSearchQuery,
  isSearching,
  setIsSearching
}) => {
  // стейт для отображения состояния фильтрации фильмов
  const [isFiltering, setIsFiltering] = useState(false);
  console.log('isFiltering:', isFiltering);


  // //стейт для отслеживания состояния строки запроса в форме ввода Сохраненных фильов
  // const [savedMovieSearchQuery, setSavedMovieSearchQuery] = useState("");

  //стейт для вывода на страницу ошибки при поиске Сохраненного фильма
  const [isSavedSearchErrored, setIsSavedSearchErrored] = useState(false);

  //стейт для отслеживания состояния чекбокса короткометражек, включен или нет
  const [isShortSavedMovieChecked, setIsShortSavedMovieChecked] =
    useState(false);

  // //стейт для отслеживания наличия поискового запроса в форме поиска Сохренных фильмов
  // const [isSavedSearchFormEmpty, setIsSavedSearchFormEmpty] = useState(false);

  //установление значения стейта movieSavedSearchQuery из значения поля поискового ввода
  function handleChangeSavedMovieSearchQuery(e) {
    e.preventDefault();
    setSavedMovieSearchQuery(e.target.value);
  }

  //функция изменяет состояние стейта чекбокса на противоположное
  const handleCheckboxChange = () => {
    setIsShortSavedMovieChecked(!isShortSavedMovieChecked);
  };

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
    // setFilteredMoviesArray(filterMoviesByDuration(filtered));
    setFilteredSavedMoviesArray(filtered);
    // console.log("filtered", filtered);
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
          // disabled={isLoading}
        />
        <button
          type="submit"
          // onClick={handleClick}
          className="input__find-button"
        ></button>
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
          handleCheckboxChange={handleCheckboxChange}
          isShortMovieChecked={isShortSavedMovieChecked}
        />
        <span className="short-films__text">Короткометражки</span>
      </div>
    </section>
  );
};

export default SavedMoviesSearchForm;
