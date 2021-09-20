import {
  SET_SEARCH_QUERY,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../actions/actionTypes.js";

const initialState = {
  query: "",
  isLoading: false,
};

const search_reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default search_reducers;
