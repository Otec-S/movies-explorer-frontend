import React from "react";
import "./SavedMoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const SavedMoviesCardList = ({
  isSearchErrored,
  isSaved,
  filteredMoviesArray,
  isShortMovieChecked,
  totalCardsOnPage,
  isMoreButtonVisible,
  addCardRows,
}) => {
  return (
    <>
      {/* Секция отрисовки карточек */}
      <section className="movies-card-section">
        <ul className="movies-card-list">
          {filteredMoviesArray.map((item) => {
            return (
              <MoviesCard
                isSaved={isSaved}
                name={item.nameRU}
                duration={item.duration}
                image={item.image.url}
                key={item.id}
                trailer={item.trailerLink}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SavedMoviesCardList;
