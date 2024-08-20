import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./router";
import Navbar from "./components/context/navbar";
import Footer from "./components/context/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <RouterComponent />
    <Footer />
  </BrowserRouter>
);
