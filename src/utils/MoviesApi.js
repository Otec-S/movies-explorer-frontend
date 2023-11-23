import { MOVIES_BASE } from "../constants.js";

// export const getAllMovies = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => data)
//     .catch(console.error);
// };

//запрос фильмов с базы Яндекса
// export const getAllMovies = () => {
//   return fetch(MOVIES_BASE, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((allMoviesData) => {
//       console.log(allMoviesData); //пока тут просто консолим !!!
//     })
//     .catch(console.error);
// };

export const getAllMovies = async () => {
  try {
    const response = await fetch(MOVIES_BASE, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const allMoviesData = await response.json();
     return allMoviesData; //возвращаем Promise на базу фильмов
  } catch (error) {
    console.error(error);
  }
};
// .then((res) => res.json())
// .then((allMoviesData) => {
//   console.log(allMoviesData); //пока тут просто консолим !!!
// })
// .catch();
