import React from "react";

import "./App.css";
import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;
