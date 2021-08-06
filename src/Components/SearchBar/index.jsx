import React, { useContext } from "react";

import { MovieContext } from "../../global/MovieContext";
import styles from "./styles.module.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery, searchMovie } = useContext(MovieContext);

  const _onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      searchMovie();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyPress={_onKeyPressHandler}
        placeholder="Type here and press enter.."
        className={styles.searchInput}
      />
      <img
        src="assets/logo.svg"
        alt="logo"
        className={styles.searchImage}
        onClick={
          searchQuery.length
            ? () => searchMovie()
            : () => console.log("No text")
        }
      />
    </div>
  );
};

export default SearchBar;
