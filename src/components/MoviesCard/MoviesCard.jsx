import React, {useState} from "react";

import "./MoviesCard.css";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";
import MinutesToHoursAndMinutes from "./MinutesToHoursAndMinutes/MinutesToHoursAndMinutes";
import { saveMovieOnServer, deleteMovieFromServer } from "../../utils/MainApi";
import { MOVIE_IMAGE_PATH } from "../../constants";


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

  const [movieCardId, setMovieCardId] = useState(null);

  //показваем трейлер фильма в отдельном окне
  const showTrailer = () => {
    window.open(trailerLink, "_blank");
  };

  const image = `${MOVIE_IMAGE_PATH}${imageShortUrl}`;

 
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
      console.log("save-response", response);

      setMovieCardId(response._id);

    } catch (error) {
      console.log(error);
    }
  };

  //удаление карточки фильма
  const deleteMovie = async () => {
    try {
      const response = await deleteMovieFromServer(movieCardId);
      console.log("delete-response", response);
    } catch (error) {
      console.log(error);
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
          <button className="movies-card__description__icon_saved" />
        ) : (
          <div className="movies-card__description__icon">
            <SaveCheckbox
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
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
