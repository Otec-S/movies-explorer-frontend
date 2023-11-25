import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ isSaved, filteredMoviesArray }) => {
  return (
    <section className="movies-card-section">
      <ul className="movies-card-list">
        {/* Отрисовка карточек */}
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
  );
};

export default MoviesCardList;
