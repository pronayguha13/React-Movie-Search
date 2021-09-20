import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";

import {
  setSearchQuery,
  searchMovies,
} from "../../redux/actions/search-action";

const SearchBar = (props) => {
  const { query, setQuery, searchMovies } = props;

  const _onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={_onKeyPressHandler}
        placeholder="Type here and press enter.."
        className={styles.searchInput}
      />
      <img
        src="assets/logo.svg"
        alt="logo"
        className={styles.searchImage}
        onClick={
          query.length ? () => searchMovies() : () => console.log("No text")
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (query) => dispatch(setSearchQuery(query)),
    searchMovies: (query) => dispatch(searchMovies(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
