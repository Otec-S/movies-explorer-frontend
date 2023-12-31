import React, { useState } from "react";
import "./MoviesCard.css";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import MinutesToHoursAndMinutes from "./MinutesToHoursAndMinutes/MinutesToHoursAndMinutes";
import { saveMovieOnServer, deleteMovieFromServer } from "../../utils/MainApi";
import { useEffect } from "react";

const MoviesCard = ({
  isSaved,
  nameRU,
  duration,
  image,
  trailerLink,
  country,
  director,
  year,
  description,
  thumbnail,
  movieId,
  nameEN,
  handleSaveStatusChange,
  allSavedMovies,
}) => {
  // в локальном хранилище привязываем ID карточки к ID фильма
  const [movieCardId, setMovieCardId] = useState(null);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    //проверяем, сохранена ли карточка в массив, например, при обновлении страницы
    //то есть методом find мы проверяем, совпадает ли movieId нашей карточки с movieId хоть какой-то карточки в массиве сохраненных фильмов

    const savedMovie = allSavedMovies?.find(
      (savedMovie) => savedMovie.movieId === movieId
    );

    //если совпадает, то устанавлиаем положение чекбокса в активное (true)
    if (savedMovie) {
      setIsChecked(true);
      setMovieCardId(savedMovie._id);
    }
  }, [allSavedMovies, movieId, movieCardId]);

  //вводим функцию "тогла" состояния чекбокса
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);

    //активизируя функцию onSave из пропсов мы отправляем запрос на сервер для сохранения/удаления этой карточки фильма
    if (!isChecked) {
      saveMovie();
    } else {
      deleteMovie();
    }
  };

  //показваем трейлер фильма в отдельном окне
  const showTrailer = () => {
    window.open(trailerLink, "_blank");
  };

  //функция сохранения фильма
  const saveMovie = async () => {
    try {
      const response = await saveMovieOnServer(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      );
      //вытаскиваем сформированный сервером _id карточки фильма, записываем его в стейт
      setMovieCardId(response._id);
      //добавляем вновь сохранненный фильм в массив allSavedMovies по флагу true
      handleSaveStatusChange(response, true);
    } catch (error) {
      console.error("error:", error);
    }
  };

  //удаление карточки фильма
  const deleteMovie = async () => {
    try {

      //удаляем по _id из ответа сервера
      const response = await deleteMovieFromServer(movieCardId);
      //функция удаляет фильм из массива allSavedMovies по флагу false
      handleSaveStatusChange(response, false);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__description__text">
          {/* Наименование карточки */}
          <h1 className="movies-card__description__title">{nameRU}</h1>
          {/* Продолжительность фильма */}
          <p className="movies-card__description__movie-duration">
            <MinutesToHoursAndMinutes minutes={duration} />
          </p>
        </div>
        {/* Иконка справа */}
        {isSaved ? (
          <button
            className="movies-card__description__icon_saved"
            onClick={deleteMovie}
          />
        ) : (
          <div className="movies-card__description__icon">
            <SaveCheckbox
              isChecked={isChecked}
              handleCheckboxClick={handleCheckboxClick}
            />
          </div>
        )}
      </div>
      {/* Фото карточки фильма */}
      <div
        onClick={showTrailer}
        className="movies-card__picture"
        style={{
          backgroundImage: `url(
            "${image}"
          )`,
        }}
      ></div>
    </li>
  );
};

export default MoviesCard;
