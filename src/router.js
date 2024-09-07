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
import DetailCart from "./components/motor/detailCart";
import DetailCartCaravan from "./components/caravan/detailCart";
import DetailCartTuning from "./components/caravan/detailCart";
import DetailCartUsedCar from "./components/usedCar/detailCart";
import MainPage from "./components/main";
import Checkboxes from "./components/SidebarAccordion/checkbox";
import ComparePage from "./components/Compare";
import CompareCaravan from "./components/Compare/CompareCaravan";
import CompareTuning from "./components/Compare/CompareTuning";
import CompareUsedCar from "./components/Compare/CompareUsedCar";

const RouterComponent = () => {
  const location = useLocation();
  const navbarContainer =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!navbarContainer && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="test" element={<Checkboxes />} /> */}

        <Route path="/motor" element={<MotorComponent />} />
        <Route path="/motor/:id" element={<MotorDetail />} />
        <Route path="/motor/:id/:id" element={<DetailCart />} />
        <Route path="/Compare" element={<ComparePage />} />

        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/caravan/:id/" element={<CaravanDetail />} />
        <Route path="/caravan/:id/:id" element={<DetailCartCaravan />} />
        <Route path="/Compare/:id/" element={<CompareCaravan />} />

        <Route path="/tuning" element={<TuningComponent />} />
        <Route path="/tuning/:id" element={<TuningDetail />} />
        <Route path="/tuning/:id/:id" element={<DetailCartTuning />} />
        <Route path="/Compare/:id/:id" element={<CompareTuning />} />

        <Route path="/usedCar" element={<UsedCarComponent />} />
        <Route path="/usedCar/:id" element={<UsedCarDetail />} />
        <Route path="/usedCar/:id/:id" element={<DetailCartUsedCar />} />
        <Route path="/Compare/:id/:id/:id" element={<CompareUsedCar />} />

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
