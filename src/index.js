import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import Routes from "./routes";

import { Movie } from "./global/MovieContext";
import { User } from "./global/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <User>
      <Routes>
        <Movie>
          <App />
        </Movie>
      </Routes>
    </User>
  </React.StrictMode>,
  document.getElementById("root")
);
