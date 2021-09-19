import { SET_MOVIE_RESULT } from "./actionTypes";

export const setMovie = (movieList) => {
  return {
    type: SET_MOVIE_RESULT,
    payload: movieList,
  };
};
