import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { setMovie } from "../../redux/actions/movie-action";

import MovieCard from "../MovieCard/index";
import StatusCard from "../StatusCard/index";

import styles from "./styles.module.css";

const MovieList = (props) => {
  const { query, movieList, isLoading } = props;
  return (
    <div className={styles.container}>
      {!isLoading ? (
        movieList.length ? (
          <div className={styles.movieListContainer}>
            {movieList.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <StatusCard
            message={
              query?.length && !movieList?.length
                ? "Sorry Cannot find the movie..."
                : "Please use the searchbox to get your favourite movie..."
            }
          />
        )
      ) : (
        <>
          <Loader
            type="Audio"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
          <h4>Fetching movie</h4>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query.query,
    movieList: state.movieList.movieList,
    isLoading: state.query.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMovie: (movieList) => dispatch(setMovie(movieList)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
