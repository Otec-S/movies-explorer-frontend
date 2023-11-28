import React, { useState } from "react";

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

  //ФУНКЦИИ

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

        //первичный параллельный приск по фильмам из api для отображения на странице
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
    setFilteredMoviesArray(filtered);
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
              // handleSearch={handleSearch}
              isLoading={isLoading}
              filteredMoviesArray={filteredMoviesArray}
              initialSetAllMovies={initialSetAllMovies}
              movieSearchQuery={movieSearchQuery}
              searchMovies={searchMovies}
              setMovieSearchQuery={setMovieSearchQuery}
              handleSearchFormSubmit={handleSearchFormSubmit}
              isSearchErrored={isSearchErrored}
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
