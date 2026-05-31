import React from "react";
import style from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={style.movie}>
      <div className={style.img__box}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
          alt="not found"
          className={style.img}
        />
      </div>

      <div className={style.details__box}>
        <p>
          <span className={style.title}>title</span> : {props.data.title}
        </p>
        <p>
          <span className={style.title}>imdb Rating</span> :{" "}
          {props.data.vote_average}
        </p>
      </div>
    </li>
  );
};

export default Movie;
