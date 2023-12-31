import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../Movies/MoreButton/MoreButton";
import nothingFound from "../../images/nothing-found.jpg";
import notYet from "../../images/nothing-yet.jpg";
import { MOVIE_IMAGE_PATH } from "../../constants";

const MoviesCardList = ({
  isSearchErrored,
  isSaved,
  filteredMoviesArray,
  isShortMovieChecked,
  totalCardsOnPage,
  isMoreButtonVisible,
  addCardRows,
  movieCardId,
  setMovieCardId,
  isChecked,
  setIsChecked,
  handleSaveStatusChange,
  allSavedMovies,
  allMovies,
}) => {
  return (
    <>
      {/* ошибка доступа к базе фильмов яндекса */}
      {isSearchErrored ? (
        <p className="search-error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз ☹
        </p>
      ) : allMovies.length === 0 && !filteredMoviesArray ? (
        <section className="nothing-found-image-block">
          <img
            src={notYet}
            alt="Тут пока ничего нет"
            className="nothing-found-image"
          />
        </section>
      ) : (
        <>
          {/* фильмы не найдены или пустая строка поискового запроса */}
          {!filteredMoviesArray || filteredMoviesArray.length === 0 ? (
            <section className="nothing-found-image-block">
              <img
                src={nothingFound}
                alt="Ничего не найдено"
                className="nothing-found-image"
              />
            </section>
          ) : (
            <>
              {/* Секция отрисовки карточек */}
              <section className="movies-card-section">
                <ul className="movies-card-list">
                  {filteredMoviesArray
                    ?.filter((array) => {
                      return isShortMovieChecked ? array.duration <= 40 : array;
                    })
                    .slice(0, totalCardsOnPage)
                    .map((item) => {
                      return (
                        <MoviesCard
                          key={item.id}
                          isSaved={isSaved}
                          nameRU={item.nameRU}
                          duration={item.duration}
                          image={`${MOVIE_IMAGE_PATH}${item.image.url}`}
                          trailerLink={item.trailerLink}
                          country={item.country}
                          director={item.director}
                          year={item.year}
                          description={item.description}
                          thumbnail={item.thumbnail}
                          movieId={item.id}
                          owner={item.owner}
                          nameEN={item.nameEN}
                          movieCardId={movieCardId}
                          setMovieCardId={setMovieCardId}
                          isChecked={isChecked}
                          setIsChecked={setIsChecked}
                          handleSaveStatusChange={handleSaveStatusChange}
                          allSavedMovies={allSavedMovies}
                        />
                      );
                    })}
                </ul>
              </section>
            </>
          )}
        </>
      )}
      {isMoreButtonVisible && <MoreButton addCardRows={addCardRows} />}
    </>
  );
};

export default MoviesCardList;
