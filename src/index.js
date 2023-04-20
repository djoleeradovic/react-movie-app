import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieInfo } from "./Components";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
