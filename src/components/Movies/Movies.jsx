import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
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
  handleSearchFormSubmit,
  isSearchErrored,
  allMovies,
  handleCheckboxChange,
  isSearchFormEmpty,
  isShortMovieChecked,
  pageWidth,
  totalCardsOnPage,
  isMoreButtonVisible,
  addCardRows,
  handleClick,
  movieCardId,
  setMovieCardId,
  isChecked,
  setIsChecked,
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
          initialSetAllMovies={initialSetAllMovies}
          movieSearchQuery={movieSearchQuery}
          searchMovies={searchMovies}
          setMovieSearchQuery={setMovieSearchQuery}
          handleSearchFormSubmit={handleSearchFormSubmit}
          isLoading={isLoading}
          handleCheckboxChange={handleCheckboxChange}
          handleClick={handleClick}
          isSearchFormEmpty={isSearchFormEmpty}
          isShortMovieChecked={isShortMovieChecked}
        />

        {/* Прелоадер */}
        {isLoading && <Preloader />}

        <MoviesCardList
          filteredMoviesArray={filteredMoviesArray}
          isSearchErrored={isSearchErrored}
          allMovies={allMovies}
          movieSearchQuery={movieSearchQuery}
          isSearchFormEmpty={isSearchFormEmpty}
          isShortMovieChecked={isShortMovieChecked}
          pageWidth={pageWidth}
          totalCardsOnPage={totalCardsOnPage}
          isMoreButtonVisible={isMoreButtonVisible}
          addCardRows={addCardRows}
          movieCardId={movieCardId}
          setMovieCardId={setMovieCardId}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
