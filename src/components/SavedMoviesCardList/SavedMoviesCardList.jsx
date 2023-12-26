import React, { useEffect } from "react";
import "./SavedMoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import nothingFound from "../../images/nothing-found.jpg";

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
  isSearching,
  setIsSearching,
}) => {
  console.log("savedMovieSearchQuery", savedMovieSearchQuery);
  console.log(
    "filteredSavedMoviesArray.length > 0:",
    filteredSavedMoviesArray.length > 0
  );

  // Проверка на наличие поискового запроса и наличие фильмов
  const displayMovies =
    //поисковая строка заполнена ИЛИ есть найденные фильмы => показываем массив найденных
    isSearching &&
    (savedMovieSearchQuery !== "" || filteredSavedMoviesArray.length > 0)
      ? filteredSavedMoviesArray
      : //иначе показываем массив всех фильмов
        allSavedMovies;

  useEffect(() => {
    if (isSavedSearchFormEmpty) {
      setFilteredSavedMoviesArray([]);
    }
  }, [isSavedSearchFormEmpty, setFilteredSavedMoviesArray]);

  return (
    <>
      {displayMovies.length > 0 ? (
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
      ) : (
        <section className="nothing-found-image-block">
          <img
            src={nothingFound}
            alt="Ничего не найдено"
            className="nothing-found-image"
          />
        </section>
      )}
    </>
  );
};

export default SavedMoviesCardList;
