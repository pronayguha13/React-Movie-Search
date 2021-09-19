import { SET_SEARCH_QUERY } from "./actionTypes";

export const setSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
};
