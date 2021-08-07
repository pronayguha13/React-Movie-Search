import React, { useContext } from "react";

import { MovieContext } from "../../global/MovieContext";

import MovieCard from "../MovieCard/index";
import StatusCard from "../StatusCard/index";

import styles from "./styles.module.css";
const MovieList = () => {
  const { movies, searchQuery } = useContext(MovieContext);

  return (
    <div className={styles.container}>
      {movies.length ? (
        <div className={styles.movieListContainer}>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <StatusCard
          message={
            searchQuery.length
              ? "Sorry Cannot find the movie..."
              : "Please use the searchbox to get your favourite movie..."
          }
        />
      )}
    </div>
  );
};

export default MovieList;
