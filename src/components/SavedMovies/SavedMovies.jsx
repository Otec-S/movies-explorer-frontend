import React from "react";
import SavedMoviesSearchForm from "../SavedMoviesSearchForm/SavedMoviesSearchForm";
import Header from "../Header/Header";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = ({ menuActive, setActive, isRegistered, isPromo, allSavedMovies, handleSaveStatusChange }) => {
  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main>
        <SavedMoviesSearchForm allSavedMovies={allSavedMovies}/>
        <SavedMoviesCardList isSaved={true} allSavedMovies={allSavedMovies} handleSaveStatusChange={handleSaveStatusChange}/>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
