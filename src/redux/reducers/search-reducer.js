import { SET_SEARCH_QUERY } from "../actions/actionTypes.js";

const search_reducers = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };
    default:
      return state;
  }
};

export default search_reducers;
