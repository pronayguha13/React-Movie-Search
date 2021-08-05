import React, { useContext } from "react";

import { MovieContext } from "../../global/MovieContext";
import styles from "./styles.module.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(MovieContext);
  return (
    <span className={styles.searchBarContainer}>
      <img src="assets/logo.svg" alt="logo" />
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Type Here..."
        className={styles.searchInput}
      />
    </span>
  );
};

export default SearchBar;
