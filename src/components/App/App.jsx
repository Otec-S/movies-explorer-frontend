import React, { useState, useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import { getAllMovies } from "../../utils/MoviesApi";

function App() {
  //СТЕЙТЫ

  //стейт для массива Всех фильмов
  const [allMovies, setAllMovies] = useState([]);

  //стейт для активации BurgerMenu
  const [isMenuActive, setIsMenuActive] = useState(false);

  //стейт для зарегистрированного пользователя
  const [isRegistered, setIsRegistered] = useState(true);

  //стейт для стилизации Header и его наполнения
  const [isPromo, setIsPromo] = useState(false);

  //стейт для загрузки прелоадера
  const [isLoading, setisLoading] = useState(false);

  //стейт для отфильтрованного поиском массива фильмов
  const [filteredMoviesArray, setFilteredMoviesArray] = useState([]);

  //стейт для отслеживания состояния строки запроса в форме ввода
  const [movieSearchQuery, setMovieSearchQuery] = useState("");

  //стейт для вывода на страницу ошибки при поиске фиьма
  const [isSearchErrored, setIsSearchErrored] = useState(false);

  //стейт для отслеживания состояния чекбокса, включен или нет
  const [isShortMovieChecked, setIsShortMovieChecked] = useState(false);

  //ФУНКЦИИ

  //функция изменяет состояние стейта чекбокса на противоположное
  const handleCheckboxChange = () => {
    setIsShortMovieChecked(!isShortMovieChecked);
  };

  //функция первоначального получения всех фильмов и записи их в стейт
  const initialSetAllMovies = () => {
    //запускаем Прелоадер
    setisLoading(true);
    //получили все карточки из базы и записали их в стейт
    getAllMovies()
      .then((allMoviesData) => {
        console.log("allMoviesData", allMoviesData);
        //записываем результаты поиска из api в стейт с фильмами
        setAllMovies(allMoviesData);
        //первичный параллельный приск по фильмам из api для отображения на странице + прогон через проверку на включенный чекбокс
        searchMovies(allMoviesData);
      })
      .catch((err) => {
        //если ошибка соединения с базой Яндекса - устанавливается этот стейт и выводится сообщение через тернарный оператор в MoviesCardList
        setIsSearchErrored(true);
      })
      //выключили Прелоадер
      .finally(() => {
        setisLoading(false);
      });
  };

  //функция фильтации входящего массива фильмов по слову из строки поиска и запись в стейт найденных фильмов
  const searchMovies = (array) => {
    const filtered = array.filter(
      (item) =>
        item.nameRU.toLowerCase().includes(movieSearchQuery.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(movieSearchQuery.toLowerCase())
    );
    setFilteredMoviesArray(filterMoviesByDuration(filtered));
  };

  //функция срабатывает по клику на кнопку поиска - отправляется форма поиска
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    //отправка запроса в первый раз
    if (allMovies.length === 0) {
      initialSetAllMovies();
    }
    //отправка запроса во второй раз и далее
    else {
      searchMovies(allMovies);
    }
  };

  //хук useEffect срабатывает на изменение состояние стейта isShortMovieChecked.
  //если слайдер включен, то перерисовывает полученный на вход массив (уже отфильтрованных?) фильмов и переделывает его в массив отфильтрованных (filteredMoviesArray?) и учетом продолжительности
  //если слайдер отключен, перерисовывает обратно?

  const filterMoviesByDuration = (array) => {
    if (isShortMovieChecked) {
      return array.filter((array) => array.duration < 40);
    }
    return array;
  };

  useEffect(() => {
    if (isShortMovieChecked) {
      setFilteredMoviesArray(filterMoviesByDuration(filteredMoviesArray));
    } else {
      searchMovies(allMovies);
    }
  }, [isShortMovieChecked]);

  console.log("allMovies", allMovies);
  console.log("movieSearchQuery", movieSearchQuery);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Register isRegistered={false} />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/"
          element={
            <Main
              menuActive={isMenuActive}
              setActive={setIsMenuActive}
              isRegistered={isRegistered}
              isPromo={true}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              isRegistered={isRegistered}
              menuActive={isMenuActive}
              setActive={setIsMenuActive}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              menuActive={isMenuActive}
              setActive={setIsMenuActive}
              isRegistered={isRegistered}
              isPromo={false}
              isLoading={isLoading}
              filteredMoviesArray={filteredMoviesArray}
              initialSetAllMovies={initialSetAllMovies}
              movieSearchQuery={movieSearchQuery}
              searchMovies={searchMovies}
              setMovieSearchQuery={setMovieSearchQuery}
              handleSearchFormSubmit={handleSearchFormSubmit}
              isSearchErrored={isSearchErrored}
              allMovies={allMovies}
              handleCheckboxChange={handleCheckboxChange}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              menuActive={isMenuActive}
              setActive={setIsMenuActive}
              isRegistered={isRegistered}
              isPromo={false}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
