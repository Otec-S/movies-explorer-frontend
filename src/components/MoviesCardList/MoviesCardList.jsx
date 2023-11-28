import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import nothingFound from "../../images/nothing-found.jpg";
import nothingYet from "../../images/nothing-yet.jpg";

const MoviesCardList = ({
  isSearchErrored,
  isSaved,
  filteredMoviesArray,
  allMovies,
}) => {
  console.log("filteredMoviesArray", filteredMoviesArray);
  console.log("isSearchErrored", isSearchErrored);

  return (
    <>
      {/* если ошибка доступа к базе данных фильмов */}
      {isSearchErrored ? (
        <p className="search-error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз ☹
        </p>
      ) : (
        <>
          {/* если это первый запрос к к базе данных фильмов */}
          {allMovies.length === 0 ? (
            <section className="nothing-found-image-block">
              <img
                src={nothingYet}
                alt="Тут пока ничего нет"
                className="nothing-found-image"
              />
            </section>
          ) : (
            <>
              {/* если по поиску ничего не найдено*/}
              {filteredMoviesArray.length === 0 ? (
                <section className="nothing-found-image-block">
                  <img
                    src={nothingFound}
                    alt="Ничего не найдено"
                    className="nothing-found-image"
                  />
                </section>
              ) : (
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
                        />
                      );
                    })}
                  </ul>
                </section>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default MoviesCardList;
