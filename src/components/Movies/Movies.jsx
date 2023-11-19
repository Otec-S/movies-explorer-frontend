import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";

const Movies = ({ menuActive, setActive, isRegistered, isPromo }) => {
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
        <MoviesCardList />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
