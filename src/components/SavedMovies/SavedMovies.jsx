import React from "react";
import SavedMoviesSearchForm from "../SavedMoviesSearchForm/SavedMoviesSearchForm";
import Header from "../Header/Header";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = ({
  menuActive,
  setActive,
  isRegistered,
  isPromo,
  allSavedMovies,
  handleSaveStatusChange,
  filteredSavedMoviesArray,
  setFilteredSavedMoviesArray,
  isSavedSearchFormEmpty,
  setIsSavedSearchFormEmpty,
  savedMovieSearchQuery,
  setSavedMovieSearchQuery,
  isSearching,
  setIsSearching
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
        <SavedMoviesSearchForm
          allSavedMovies={allSavedMovies}
          filteredSavedMoviesArray={filteredSavedMoviesArray}
          setFilteredSavedMoviesArray={setFilteredSavedMoviesArray}
          isSavedSearchFormEmpty={isSavedSearchFormEmpty}
          setIsSavedSearchFormEmpty={setIsSavedSearchFormEmpty}
          savedMovieSearchQuery={savedMovieSearchQuery}
          setSavedMovieSearchQuery={setSavedMovieSearchQuery}
          isSearching={isSearching}
                    setIsSearching={setIsSearching}
        />
        <SavedMoviesCardList
          isSaved={true}
          allSavedMovies={allSavedMovies}
          handleSaveStatusChange={handleSaveStatusChange}
          filteredSavedMoviesArray={filteredSavedMoviesArray}
          setFilteredSavedMoviesArray={setFilteredSavedMoviesArray}
          isSavedSearchFormEmpty={isSavedSearchFormEmpty}
          setIsSavedSearchFormEmpty={setIsSavedSearchFormEmpty}
          savedMovieSearchQuery={savedMovieSearchQuery}
          setSavedMovieSearchQuery={setSavedMovieSearchQuery}
          isSearching={isSearching}
                    setIsSearching={setIsSearching}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
