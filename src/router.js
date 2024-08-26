import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MotorComponent from "./components/motor";
import CaravanComponent from "./components/caravan";
import TuningComponent from "./components/tuning";
import UsedCarComponent from "./components/usedCar";
import CampingPlaceComponent from "./components/camping";
import NotFoundComponent from "./components/404";
import MotorDetail from "./components/motor/detail";
import CaravanDetail from "./components/caravan/detail";
import TuningDetail from "./components/tuning/detail";
import UsedCarDetail from "./components/usedCar/detail";
import CampingDetail from "./components/camping/detail";
import LoginComponent from "./components/auth/login";
import RegisterComponent from "./components/auth/register";
import Navbar from "./components/context/navbar";
import Footer from "./components/context/footer";

const RouterComponent = () => {
  const location = useLocation();
  const navbarContainer =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!navbarContainer && <Navbar />}
      <Routes>
        <Route path="/motor" element={<MotorComponent />} />
        <Route path="/motor/:id" element={<MotorDetail />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/caravan/:id" element={<CaravanDetail />} />
        <Route path="/tuning" element={<TuningComponent />} />
        <Route path="tuning/:id" element={<TuningDetail />} />
        <Route path="/usedCar" element={<UsedCarComponent />} />
        <Route path="/usedCar/:id" element={<UsedCarDetail />} />
        <Route path="/camping" element={<CampingPlaceComponent />} />
        <Route path="/camping/:id" element={<CampingDetail />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
      {!navbarContainer && <Footer />}
    </>
  );
};

export default RouterComponent;
