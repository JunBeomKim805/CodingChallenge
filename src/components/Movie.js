import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${props.image}`}></img>
      <button value={props.title} onClick={props.onAdd}>
        like
      </button>
      <button>dislike</button>
    </li>
  );
};

export default Movie;
