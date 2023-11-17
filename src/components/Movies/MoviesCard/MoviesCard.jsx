import React from "react";
import "./MoviesCard.css";
import SaveCheckbox from "../../SaveCheckbox/SaveCheckbox";

const MoviesCard = () => {
  return (
    <div className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__description__text">
          <h1 className="movies-card__description__title">
            33 слова о дизайне
          </h1>
          <p className="movies-card__description__movie-duration">1ч 47м</p>
        </div>
        <div className="movies-card__description__icon">
          <SaveCheckbox />
        </div>
      </div>
      <div className="movies-card__picture"></div>
    </div>
  );
};

export default MoviesCard;
