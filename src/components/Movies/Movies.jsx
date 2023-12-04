import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import { useState } from "react";

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
  // setTotalCardsOnPage,
}) => {
  //стейт базового количества карточек на странице
  const [baseNumberOfCards, setBaseNumberOfCards] = useState(12);

  //по клику на кнопку поиска также сбрасываем до базового количество отражаемых на странице карточек
  const handleClick = () => {
    setBaseNumberOfCards(12);
  };

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
          handleSearchFormSubmit={handleSearchFormSubmit}
          isLoading={isLoading}
          handleCheckboxChange={handleCheckboxChange}
          handleClick={handleClick}
        />

        {/* Прелоадер */}
        {isLoading && <Preloader />}

        <MoviesCardList
          filteredMoviesArray={filteredMoviesArray}
          isSearchErrored={isSearchErrored}
          allMovies={allMovies}
          // setTotalCardsOnPage={setTotalCardsOnPage}
          baseNumberOfCards={baseNumberOfCards}
          setBaseNumberOfCards={setBaseNumberOfCards}
        />
        {/* <MoreButton /> */}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
