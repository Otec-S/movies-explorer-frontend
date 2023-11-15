import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCard from "./MoviesCard/MoviesCard";


const Movies = ({ menuActive, setActive, isRegistered, isPromo }) => {
  return (
    <main>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <SearchForm />
      <MoviesCard/>
    </main>
  );
};

export default Movies;
