import React, { useEffect } from "react";
import "./SavedMoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const SavedMoviesCardList = ({
  isSaved,
  allSavedMovies,
  handleSaveStatusChange,
  filteredSavedMoviesArray,
  setFilteredSavedMoviesArray,
  isSavedSearchFormEmpty,
  setIsSavedSearchFormEmpty,
  savedMovieSearchQuery,
  setSavedMovieSearchQuery,
}) => {
  console.log("savedMovieSearchQuery", savedMovieSearchQuery);
  console.log(
    "filteredSavedMoviesArray.length > 0:",
    filteredSavedMoviesArray.length > 0
  );

  // Проверка на наличие поискового запроса и наличие фильмов
  const displayMovies =
    //поисковая строка заполнена ИЛИ есть найденные фильмы => показываем массив найденных
    savedMovieSearchQuery !== "" || filteredSavedMoviesArray.length > 0
      ? filteredSavedMoviesArray
      : //иначе показываем массив всех фильмов
        allSavedMovies;

  useEffect(() => {
    // Обнуляем фильтрованный массив при обнулении поисковой строки
    if (savedMovieSearchQuery === "") {
      setFilteredSavedMoviesArray([]);
    }
  }, [savedMovieSearchQuery]);

  return (
    <>
      {/* Секция отрисовки карточек */}
      <section className="movies-card-section">
        <ul className="movies-card-list">
          {displayMovies?.map((item) => {
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
                movieId={item.movieId}
                owner={item.owner}
                nameEN={item.nameEN}
                handleSaveStatusChange={handleSaveStatusChange}
                allSavedMovies={allSavedMovies}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SavedMoviesCardList;
