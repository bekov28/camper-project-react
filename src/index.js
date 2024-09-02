import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./router";
import Navbar from "./components/context/navbar";
import Footer from "./components/context/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import ModalComponent from "./components/carousel/modalassets/modal/modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RouterComponent />
  </BrowserRouter>
);
