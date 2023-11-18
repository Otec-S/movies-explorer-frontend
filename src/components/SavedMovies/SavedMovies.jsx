import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


const SavedMovies = ({ menuActive, setActive, isRegistered, isPromo }) => {
  return (
    <main>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <SearchForm />
      <MoviesCardList/>
    </main>
  );
};

export default SavedMovies;
