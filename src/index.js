import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import navbar from "./navbar";
const element = <h1> Hello Javascript , {2 + 7}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <navbar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
