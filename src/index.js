import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/Main.css";
import Hotel from "./Hotel";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Hotel />
    </BrowserRouter>
  </React.StrictMode>
);
