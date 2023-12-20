import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../Movies/MoreButton/MoreButton";
import nothingFound from "../../images/nothing-found.jpg";

const MoviesCardList = ({
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
      {/* ошибка доступа к базе фильмов яндекса */}
      {isSearchErrored ? (
        <p className="search-error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз ☹
        </p>
      ) : (
        <>
          {/* фильмы не найдены или пустая строка поискового запроса */}
          {filteredMoviesArray === null ||
          filteredMoviesArray === "" ||
          filteredMoviesArray.length === 0 ? (
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
                    .filter((array) => {
                      return isShortMovieChecked ? array.duration <= 40 : array;
                    })
                    .slice(0, totalCardsOnPage)
                    .map((item) => {
                      return (
                        <MoviesCard
                          // isSaved={isSaved}
                          // name={item.nameRU}
                          // duration={item.duration}
                          // image={item.image.url}
                          // key={item.id}
                          // trailer={item.trailerLink}
                          key={item.id}
                          isSaved={isSaved}
                          nameRU={item.nameRU}
                          duration={item.duration}
                          imageShortUrl={item.image.url}
                          trailerLink={item.trailerLink}
                          country={item.country}
                          director={item.director}
                          year={item.year}
                          description={item.description}
                          thumbnail={item.thumbnail}
                          movieId={item.id}
                          nameEN={item.nameEN}
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
