import React from "react";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import cart from "../assets/cart.png";
import man from "../assets/man.svg";
import "./style.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu-icon.svg";

const Navbar = () => {
  return (
    <div className="Container">
      <div className="logoWrapper">
        <img src={menu}  alt="menu-icon" class="menu-icon"/>
        <img src={logo} alt="logo-img" />
      </div>
      <div className="menuWrapper">
        <div className="menuWrappermini">
          <Link to={"/motor"}>
            <p>Motor</p>
          </Link>
          <img src={arrow} alt="arrow-img" />
        </div>
        <div className="menuWrappermini">
          <Link to={"/caravan"}>
            <p>Caravan</p>
          </Link>

          <img src={arrow} alt="arrow-img" />
        </div>
        <div className="menuWrappermini">
          <Link to={"/tuning"}>
            <p>Tuning</p>
          </Link>

          <img src={arrow} alt="arrow-img" />
        </div>
        <div className="menuWrappermini">
          <Link to={"/usedCar"}>
            <p>Used Car</p>
          </Link>
          <img src={arrow} alt="arrow-img" />
        </div>
        <div className="menuWrappermini">
          <Link to={"/campingPlace"}>
            <p>Camping Place</p>
          </Link>
        </div>
      </div>
      <div className="iconWrapper">
        <img src={cart} alt="cart-img" />
        <img src={man} alt="man-img" class="man"/>
        <img src={menu}  alt="menu-icon" class="menu-icon-2"/>
        <div className="en-lang">
          <p>En</p>
          <img src={arrow} alt="arrow-img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
