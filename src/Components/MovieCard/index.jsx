import React from "react";

import styles from "./styles.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.MovieCard}>
      <img src={movie.Poster} alt={movie.Title} />
      <p className={styles.MovieTitle}>{movie.Title}</p>
    </div>
  );
};

export default MovieCard;
