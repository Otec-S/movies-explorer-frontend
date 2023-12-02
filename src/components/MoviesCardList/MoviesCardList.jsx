import React, { useState, useEffect } from "react";
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
}) => {
  //определяем ширину видимой части страницы
  const pageWidth = document.documentElement.clientWidth;
  //стейт количества рядов/строк карточек на странице
  const [rowsOnPage, setRowsOnPage] = useState();
  //стейт количества колонок карточек на странице
  const [columnsOnPage, setColumnsOnPage] = useState();
  //стейт общего количества карточек на странице
  const [totalCardsOnPage, setTotalCardsOnPage] = useState(12);
  //стейт отображения кнопки Ещё
  const [showMoreButton, setShowMoreButton] = useState(true);

  //добавление новых рядов карточек
  const addCardRows = () => {
    // Увеличиваем количество рядов на 1 или 2 в зависимости от ширины экрана
    //<<<<<<<проверь ниже числовые значения>>>>>>
    setRowsOnPage(
      (prevRowCount) =>
        prevRowCount + (pageWidth >= 320 && window.innerWidth <= 768 ? 2 : 1)
    );
  };

  useEffect(() => {
    //функция управления стейтами количества карточек на странице
    const handleCardsOnPage = () => {
      if (pageWidth > 1200) {
        setTotalCardsOnPage(12);
      } else if (pageWidth >= 660 && pageWidth <= 1200) {
        setTotalCardsOnPage(8);
      } else if (pageWidth < 660) {
        setTotalCardsOnPage(5);
      }
    };
    // Проверяем ширину экрана при монтировании компонента
    handleCardsOnPage();
    // setTotalCardsOnPage(() => rowsOnPage * columnsOnPage);
    console.log("totalCardsOnPage", totalCardsOnPage);
    console.log("pageWidth", pageWidth);

    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", () => {
      // Устанавливаем setTimeout, чтобы не вызывать слишком часто
      setTimeout(handleCardsOnPage, 200);
    });
    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleCardsOnPage);
    };
  }, [totalCardsOnPage, pageWidth]);

  return (
    <>
      {/* если ошибка доступа к базе данных фильмов */}
      {isSearchErrored ? (
        <p className="search-error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз ☹
        </p>
      ) : (
        <>
          {/* если это первый запрос к к базе данных фильмов */}
          {allMovies.length === 0 ? (
            <section className="nothing-found-image-block">
              <img
                src={nothingYet}
                alt="Тут пока ничего нет"
                className="nothing-found-image"
              />
            </section>
          ) : (
            <>
              {/* если по поиску ничего не найдено*/}
              {filteredMoviesArray.length === 0 ? (
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
                            />
                          );
                        })}
                    </ul>
                  </section>
                </>
              )}
            </>
          )}
        </>
      )}
      <MoreButton addCardRows={addCardRows} />
    </>
  );
};

export default MoviesCardList;
