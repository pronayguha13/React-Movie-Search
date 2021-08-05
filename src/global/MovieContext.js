import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const Movie = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=${process.env.REACT_APP_API_KEY}&type="movie"`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <MovieContext.Provider value={{ movies, searchQuery, setSearchQuery }}>
      {children}
    </MovieContext.Provider>
  );
};
