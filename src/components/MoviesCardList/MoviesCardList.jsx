import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({isSaved}) => {
  return (
    <section className="movies-card-section">
      <ul className="movies-card-list">
        <li>
          <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
        <li>
        <MoviesCard isSaved={isSaved}/>
        </li>
      </ul>
    </section>
  );
};

export default MoviesCardList;
