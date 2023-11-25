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
  setmovieSearchQuery,
  handleClick
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
        setmovieSearchQuery={setmovieSearchQuery}
        
         />

        {/* Прелоадер */}
        {isLoading && <Preloader />}

        <MoviesCardList filteredMoviesArray={filteredMoviesArray} />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
