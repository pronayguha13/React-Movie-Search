import { SET_MOVIE_RESULT } from "../actions/actionTypes";

const movie_reducers = (state = {}, action) => {
  switch (action.type) {
    case SET_MOVIE_RESULT:
      return {
        ...state,
        movieList: action.payload.movieList,
      };
    default:
      break;
  }
};

export default movie_reducers;
