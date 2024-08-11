import React from "react";
import { Route, Routes } from "react-router-dom";
import MotorComponent from "./components/motor";
import CaravanComponent from "./components/caravan";
import TuningComponent from "./components/tuning";
import UsedCarComponent from "./components/usedCar";
import CampingPlaceComponent from "./components/campingPlace";
import NotFoundComponent from "./components/404";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/motor" element={<MotorComponent />} />
      <Route path="/caravan" element={<CaravanComponent />} />
      <Route path="/tuning" element={<TuningComponent />} />
      <Route path="/usedCar" element={<UsedCarComponent />} />
      <Route path="/campingPlace" element={<CampingPlaceComponent />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
};

export default RouterComponent;
