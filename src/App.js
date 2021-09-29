import React, { useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17"
    );
    const data = await response.json();
    const loadedMovies = [];
    for (const movies of data.results) {
      loadedMovies.push({
        id: movies.id,
        title: movies.title,
        image: movies.poster_path,
      });
    }

    setMovies(loadedMovies);
  }, []);
  async function addMovieHandler(event) {
    const target = await event.target.value;
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17"
    );
    const data = await response.json();
    console.log(data);
    let movies = [];
    for (const movie of data.results) {
      if (target === movie.title) {
        movies.push({
          id: movie.id,
          title: movie.title,
          image: movie.poster_path,
        });
      }
    }

    const responseForLike = await fetch(
      "https://api.themoviedb.org/3/list/liked?api_key=d0f5f2e135336200362af8a1a73acb17",
      {
        method: "POST",
        body: JSON.stringify(movies),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    const dataForLike = await responseForLike.json();
    console.log(dataForLike);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList onClick={addMovieHandler} movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
