import React from "react";
import {
  Arrow,
  Cart,
  Container,
  Enlang,
  IconWrapper,
  Logo,
  LogoWrapper,
  Man,
  Menu,
  MenuWrapper,
  NavLink,
} from "../styles/style";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.svg";
import cart from "../../assets/cart.png";
import man from "../../assets/man.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";

const Navbar = () => {
  return (
    // Navbar Section

    <Container>
      <NavLink to={"/"}>
        <LogoWrapper>
          <img src={menu} alt="menu-icon" className="menu-icon" />
          <Logo src={logo} />
        </LogoWrapper>
      </NavLink>
      <MenuWrapper>
        <NavLink to={"/motor"}>
          <div className="menuWrappermini">
            <p>Motor</p>
            <Arrow src={arrow} />
          </div>
        </NavLink>
        <NavLink to={"/caravan"}>
          <div className="menuWrappermini">
            <p>Caravan</p>
            <Arrow src={arrow} />
          </div>
        </NavLink>
        <NavLink to={"/tuning"}>
          <div className="menuWrappermini">
            <p>Tuning</p>
            <Arrow src={arrow} />
          </div>
        </NavLink>
        <NavLink to={"/usedCar"}>
          <div className="menuWrappermini">
            <p>Used Car</p>
            <Arrow src={arrow} />
          </div>
        </NavLink>
        <NavLink to={"/camping"}>
          <div className="menuWrappermini">
            <p>Camping Place</p>
          </div>
        </NavLink>
      </MenuWrapper>
      <IconWrapper>
        <Cart src={cart} alt="cart-img" className="CartImg" />
        <NavLink to={"/login"}>
          <Man src={man} alt="man-img" className="ManImg" />
        </NavLink>
        <Enlang>
          <div className="en-lang">
            <p>En</p>
            <Arrow src={arrow} />
          </div>
        </Enlang>
        <Menu src={menu} alt="menu-icon" className="menu-icon2" />
      </IconWrapper>
    </Container>
  );
};

export default Navbar;
