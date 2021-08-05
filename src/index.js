import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { Movie } from "./global/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <Movie>
      <App />
    </Movie>
  </React.StrictMode>,
  document.getElementById("root")
);
