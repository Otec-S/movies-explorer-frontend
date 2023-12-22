import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = ({ menuActive, setActive, isRegistered, isPromo }) => {
  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main>
        <SearchForm />
        <SavedMoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
