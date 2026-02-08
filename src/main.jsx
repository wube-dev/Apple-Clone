import React from "react";
import ReactDOM from "react-dom/client"; // note: /client
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
