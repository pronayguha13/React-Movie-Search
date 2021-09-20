import axios from "axios";

export const searchMovie = async (searchQuery) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchQuery}&apikey=${process.env.REACT_APP_API_KEY}&type="movie"`
    );
    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
