import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";
import { persistor, store } from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <SearchBar /> */}
          <MovieList />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
