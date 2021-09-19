import React, { useContext } from "react";
import { connect } from "react-redux";
import { setMovie } from "../../redux/actions/movie-action";

import MovieCard from "../MovieCard/index";
import StatusCard from "../StatusCard/index";

import styles from "./styles.module.css";
const MovieList = (props) => {
  const { query, movieList, setMovie } = props;
  return (
    <div className={styles.container}>
      {movieList.length ? (
        <div className={styles.movieListContainer}>
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <StatusCard
          message={
            query.length
              ? "Sorry Cannot find the movie..."
              : "Please use the searchbox to get your favourite movie..."
          }
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query.query,
    movieList: state.movieList.movieList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMovie: (movieList) => dispatch(setMovie(movieList)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
