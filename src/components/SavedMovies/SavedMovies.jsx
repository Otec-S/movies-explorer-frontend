import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
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
        <MoviesCardList isSaved={true} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
