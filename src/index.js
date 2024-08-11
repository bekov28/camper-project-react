import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./router";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <RouterComponent />
  <Footer />
  </BrowserRouter>
);
