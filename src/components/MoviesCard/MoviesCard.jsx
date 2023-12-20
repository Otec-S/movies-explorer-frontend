import React from "react";

import "./MoviesCard.css";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import MinutesToHoursAndMinutes from "./MinutesToHoursAndMinutes/MinutesToHoursAndMinutes";
import { saveMovieOnServer } from "../../utils/MainApi";

const MoviesCard = ({
  isSaved,
  nameRU,
  duration,
  imageShortUrl,
  trailerLink,
  country,
  director,
  year,
  description,
  thumbnail,
  movieId,
  nameEN,
}) => {
  //показваем трейлер фильма в отдельном окне
  const showTrailer = () => {
    window.open(trailerLink, "_blank");
  };


  const image = `https://api.nomoreparties.co${imageShortUrl}`;
  console.log("image", image);
  console.log("тип image", typeof(image));

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

      console.log("response", response);
    } catch (error) {}
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
          <button className="movies-card__description__icon_saved" />
        ) : (
          <div className="movies-card__description__icon">
            <SaveCheckbox saveMovie={saveMovie} />
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
