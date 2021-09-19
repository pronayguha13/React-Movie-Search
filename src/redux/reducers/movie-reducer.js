import { SET_MOVIE_RESULT } from "../actions/actionTypes";

const initialState = {
  movieList: [],
};

const movie_reducers = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_MOVIE_RESULT: {
      newState["movieList"] = action.payload;
      break;
    }
    default:
      break;
  }
  return newState;
};

export default movie_reducers;
