import search_reducers from "./search-reducer";

import movie_reducers from "./movie-reducer";

import { combineReducers } from "redux";

const rootReducers = combineReducers({ search_reducers, movie_reducers });

export default rootReducers;
