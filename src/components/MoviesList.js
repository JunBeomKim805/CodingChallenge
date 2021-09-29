import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul onClick={props.onClick} className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} image={movie.image} />
      ))}
    </ul>
  );
};

export default MovieList;
