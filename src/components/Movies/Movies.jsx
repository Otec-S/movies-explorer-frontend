import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";

const Movies = ({
  menuActive,
  setActive,
  isRegistered,
  isPromo,
  searchMovies,
  isLoading,
  filteredMoviesArray,
  initialSetAllMovies,
  movieSearchQuery,
  setMovieSearchQuery,
  handleClick,
  isSearchErrored,
}) => {
  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main>
        <SearchForm
          // handleSearch={handleSearch}
          initialSetAllMovies={initialSetAllMovies}
          movieSearchQuery={movieSearchQuery}
          searchMovies={searchMovies}
          setMovieSearchQuery={setMovieSearchQuery}
          handleClick={handleClick}
        />

        {/* Прелоадер */}
        {isLoading && <Preloader />}

        <MoviesCardList
          filteredMoviesArray={filteredMoviesArray}
          isSearchErrored={isSearchErrored}
        />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
