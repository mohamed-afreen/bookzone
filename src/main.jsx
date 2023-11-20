import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvder } from "./context";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import BookDetails from "./components/BookDetails/BookDetails";
import BookList from "./components/BookList/BookList";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AppProvder>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}>
            <Route path="about" element = {<About />} />
            <Route path="book" element = {<BookList />} />
            <Route path="/book/:id" element = {<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvder>
  
);
