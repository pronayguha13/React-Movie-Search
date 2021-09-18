import { createStore } from "redux";

const initialState = {
  searchQuery: "",
  movieList: [],
};

export const store = createStore(rootReducer, initialState);
