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
  handleSearch,
  isLoading,
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
        <SearchForm handleSearch={handleSearch} />
        
        {/* Прелоадер */}
        {isLoading && <Preloader />}

        <MoviesCardList />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
