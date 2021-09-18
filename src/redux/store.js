import { createStore } from "redux";

import rootReducer from "./reducers/index";

const initialState = {
  searchQuery: "",
  movieList: [],
};

export const store = createStore(rootReducer, initialState);
