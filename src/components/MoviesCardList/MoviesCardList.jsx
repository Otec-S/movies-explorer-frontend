import React, { useState, useEffect, useCallback } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../Movies/MoreButton/MoreButton";
import nothingFound from "../../images/nothing-found.jpg";
import nothingYet from "../../images/nothing-yet.jpg";

const MoviesCardList = ({
  isSearchErrored,
  isSaved,
  filteredMoviesArray,
  allMovies,
  // setTotalCardsOnPage,
  restoreInitialTotalCardsOnPage,
  baseNumberOfCards,
  setBaseNumberOfCards,
  movieSearchQuery,
  isSearchFormEmpty,
}) => {
  //СТЕЙТЫ
  //стейт для определения ширины видимой части страницы
  const [pageWidth, setPageWidth] = useState();

  //стейт видимого количества карточек на странице
  const [totalCardsOnPage, setTotalCardsOnPage] = useState();

  //стейт отображения кнопки Ещё
  const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(false);

  //ФУНКЦИИ

  //функция для добавления новых рядов карточек
  const addCardRows = () => {
    setBaseNumberOfCards(baseNumberOfCards + (pageWidth > 1200 ? 3 : 2));
  };

  const showMoreButton = useCallback(() => {
    filteredMoviesArray
      ? filteredMoviesArray.length > totalCardsOnPage + 1
        ? setIsMoreButtonVisible(true)
        : setIsMoreButtonVisible(false)
      : setIsMoreButtonVisible(false);
  }, [filteredMoviesArray, totalCardsOnPage]);

  //функция управления стейтами количества карточек на странице
  const handleCardsOnPage = useCallback(() => {
    //устанавливаем ширину экрана в зависимости от видимой части
    setPageWidth(document.documentElement.clientWidth);
    //меняем количество карт в зависимости от ширины экрана
    if (pageWidth > 1200) {
      setTotalCardsOnPage(baseNumberOfCards);
    } else if (pageWidth >= 660 && pageWidth <= 1200) {
      setTotalCardsOnPage(baseNumberOfCards - 4);
    } else if (pageWidth < 660) {
      setTotalCardsOnPage(baseNumberOfCards - 7);
    }
  }, [baseNumberOfCards, pageWidth]);

  useEffect(() => {
    //отрисовываем карточки на странице в зависимости от ширины экрана
    handleCardsOnPage();
    //показываем или скрываем кнопку Ещё
    showMoreButton();
  }, [handleCardsOnPage, pageWidth, totalCardsOnPage, showMoreButton]);

  useEffect(() => {
    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", () => {
      // Устанавливаем setTimeout, чтобы не вызывать слишком часто
      setTimeout(handleCardsOnPage, 200);
    });
    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleCardsOnPage);
    };
  }, [totalCardsOnPage, baseNumberOfCards, pageWidth, handleCardsOnPage]);

  return (
    <>
      {/* ошибка доступа к базе фильмов яндекса */}
      {isSearchErrored ? (
        <p className="search-error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз ☹
        </p>
      ) : (
        <>
          {/* фильмы не найдены или пустая строка поискового запроса */}
          {filteredMoviesArray.length === 0 || movieSearchQuery === "" ? (
            <section className="nothing-found-image-block">
              <img
                src={nothingFound}
                alt="Ничего не найдено"
                className="nothing-found-image"
              />
            </section>
          ) : (
            <>
              {/* Секция отрисовки карточек */}
              <section className="movies-card-section">
                <ul className="movies-card-list">
                  {filteredMoviesArray
                    .slice(0, totalCardsOnPage)
                    .map((item) => {
                      return (
                        <MoviesCard
                          isSaved={isSaved}
                          name={item.nameRU}
                          duration={item.duration}
                          image={item.image.url}
                          key={item.id}
                          trailer={item.trailerLink}
                        />
                      );
                    })}
                </ul>
              </section>
            </>
          )}
        </>
      )}
      {isMoreButtonVisible && <MoreButton addCardRows={addCardRows} />}
    </>
  );
};

export default MoviesCardList;
