import React from "react";
import "./MoviesCard.css";
import SaveCheckbox from "../SaveCheckbox/SaveCheckbox";

const MoviesCard = ({ isSaved, name, duration, image }) => {
  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__description__text">
          {/* Наименование карточки */}
          <h1 className="movies-card__description__title">{name}</h1>
          {/* Продолжительность фильма */}
          <p className="movies-card__description__movie-duration">{duration}</p>
        </div>
        {/* Иконка справа */}
        {isSaved ? (
          <button className="movies-card__description__icon_saved" />
        ) : (
          <div className="movies-card__description__icon">
            <SaveCheckbox />
          </div>
        )}
      </div>
      {/* Фото карточки фильма */}
      <div
        className="movies-card__picture"
        style={{
          backgroundImage: `url(
            "https://api.nomoreparties.co${image}"
          )`,
        }}
      ></div>
    </div>
  );
};

export default MoviesCard;
