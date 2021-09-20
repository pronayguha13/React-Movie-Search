import { SET_SEARCH_QUERY, SHOW_LOADER, HIDE_LOADER } from "./actionTypes";
import { setMovie } from "./movie-action";

import { searchMovie } from "../../utils/helperMethods";

export const setSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const searchMovies = () => {
  return async (dispatch, getState) => {
    dispatch(showLoader());
    const { query } = getState();
    const movieList = await searchMovie(query.query);
    dispatch(setMovie(movieList));
    dispatch(hideLoader());
  };
};
