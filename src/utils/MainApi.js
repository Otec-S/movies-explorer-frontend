import { SAVED_MOVIES_BASE } from "../constants.js";

//получение с бэка всего списка сохраненных фильмов (убрали из скобок токен)
export const getAllSavedMovies = async () => {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const allSavedMoviesData = await response.json();
    return allSavedMoviesData; //возвращаем Promise на базу сохраненных фильмов
  } catch (error) {
    console.error(error);
  }
};

//отправка в бэк карточки фильма
export const saveMovie = async (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN
) => {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    });

    const savedMovieData = await response.json();
    return savedMovieData; //возвращаем Promise на сохраненный фильм
  } catch (error) {
    console.error(error);
  }
};
