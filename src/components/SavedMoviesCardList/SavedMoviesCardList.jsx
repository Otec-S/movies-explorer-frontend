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
  allSavedMovies
}) => {
  return (
    <>
      {/* Секция отрисовки карточек */}
      <section className="movies-card-section">
        <ul className="movies-card-list">
          {allSavedMovies.map((item) => {
            return (
              <MoviesCard
                key={item.movieId}
                isSaved={isSaved}
                nameRU={item.nameRU}
                duration={item.duration}
                image={item.image}
                trailerLink={item.trailerLink}
                country={item.country}
                director={item.director}
                year={item.year}
                description={item.description}
                thumbnail={item.thumbnail}
                // movieId={item.id}
                owner={item.owner}
                nameEN={item.nameEN}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SavedMoviesCardList;
