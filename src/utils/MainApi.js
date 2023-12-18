import { SAVED_MOVIES_BASE } from "../constants.js";

//регистрация
export async function register(name, email, password) {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    return response;
  } 
  catch (error) {
    console.error(error);
    // Обработка ошибки, например, throw error; или другие действия
  }
}

//авторизация
export async function authorize(email, password) {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response;
  } 
  catch (error) {
    console.error(error);
    // Обработка ошибки, например, throw error; или другие действия
  }
}


//изменение данных пользователя
export async function updateProfile(name, email) {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    return response;
  } 
  catch (error) {
    console.error(error);
    // Обработка ошибки, например, throw error; или другие действия
  }
}



//разлогинивание
export async function signout() {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ email, password }),
    });

    return response;
  } 
  catch (error) {
    console.error(error);
    // Обработка ошибки, например, throw error; или другие действия
  }
}


//получение с бэка всего списка сохраненных фильмов (убрали из скобок токен)
export const getAllSavedMovies = async () => {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/movies`, {
      method: "GET",
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
