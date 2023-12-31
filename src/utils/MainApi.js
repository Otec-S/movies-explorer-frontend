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
  } catch (error) {
    console.error(error);
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
  } catch (error) {
    console.error(error);
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
  } catch (error) {
    console.error(error);
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
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

//получение с бэка всего списка сохраненных фильмов
export const getAllSavedMovies = async () => {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/movies`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const allSavedMoviesData = await response.json();
    return allSavedMoviesData;
  } catch (error) {
    console.error(error);
  }
};

//отправка в бэк карточки фильма
export const saveMovieOnServer = async (
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
      credentials: "include",
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
    return savedMovieData; 
  } catch (error) {
    console.error(error);
  }
};

//удаление из бэка карточки фильма
export const deleteMovieFromServer = async (_id) => {
  try {
    const response = await fetch(`${SAVED_MOVIES_BASE}/movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const deletedMovieData = await response.json();
    return deletedMovieData; 
  } catch (error) {
    console.error(error);
  }
};
