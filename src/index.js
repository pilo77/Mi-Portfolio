import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

AOS.init();
window.addEventListener('load', AOS.refresh);
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
