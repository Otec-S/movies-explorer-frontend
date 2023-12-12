import { SAVED_MOVIES_BASE } from "../constants.js";

// import { useContext } from "react";
// const { errorServerMessage, setErrorServerMessage } = useContext(AppContext);

//авторизация
// export function authorize(email, password) {
//   return fetch(`${SAVED_MOVIES_BASE}/signin`, {
//     method: "POST",
//     credentials: 'include', // теперь куки посылаются вместе с запросом
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         return data; //возвращается только токен
//       }
//     })
//     .catch(console.error);
// }

// Вспомогательная функция для извлечения токена из куки
// function getTokenFromCookie(cookie) {
//   const tokenMatch = cookie.match(/jwt=([^;]*)/);
//   return tokenMatch ? tokenMatch[1] : null;
// }

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

      console.log("response in api", response);

    if (response.ok) {
      // Получаем токен из куки
      // const token = response.headers.get("Set-Cookie");
      // Далее можно использовать токен по необходимости

      const data = await response.json();

      // if (data.token) {
      //   // Ваши дополнительные действия с токеном
      // }
      console.log("Token:", data.token);

      return data, response;
    } else {
      // Обработка ошибки, если response.ok === false
      console.error(`Server returned an error: ${response.statusText}`);
    }
  } catch (error) {
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
