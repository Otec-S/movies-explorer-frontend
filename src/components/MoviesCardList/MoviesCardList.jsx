import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import nothingFound from "../../images/nothing-found.jpg";

const MoviesCardList = ({ isSearchErrored, isSaved, filteredMoviesArray }) => {
  console.log("filteredMoviesArray", filteredMoviesArray);
  console.log("isSearchErrored", isSearchErrored);

  return (
    <>
      {isSearchErrored ? (
        <p className="search-error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз ☹
        </p>
      ) : (
        <>
          {" "}
          {filteredMoviesArray.length === 0 ? (
            <section className="nothing-found-image">
              <img src={nothingFound} alt="Ничего не найдено" />
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
  );
};

export default MoviesCardList;
