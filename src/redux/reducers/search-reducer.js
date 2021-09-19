import { SET_SEARCH_QUERY } from "../actions/actionTypes.js";

const initialState = {
  query: "",
};

const search_reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default search_reducers;
