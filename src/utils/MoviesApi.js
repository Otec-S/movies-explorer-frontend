import { MOVIES_BASE } from "../constants.js";

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
     return allMoviesData; 
  } catch (error) {
    console.error(error);
  }
};

