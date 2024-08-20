import React from "react";
import { Route, Routes } from "react-router-dom";
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
import UseStateComponent from "./components/motor/useState";
import Hmenu from "./components/motor/menu/Hmenu";
import Vmenu from "./components/motor/menu/Vmenu";

const RouterComponent = () => {
  return (
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
      {/* <Route path="/motor" element={<UseStateComponent />} /> */}
      {/* <Route path="/Hmenu" element={<Hmenu />} />
      <Route path="/Vmenu" element={<Vmenu />} /> */}
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
};

export default RouterComponent;
