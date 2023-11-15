import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";


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
    </main>
  );
};

export default Movies;
