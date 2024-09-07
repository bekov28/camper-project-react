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
  MenuIcon,
  MenuIconRight,
  MenuWrapper,
  NavLink,
} from "../styles/style";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.svg";
import cart from "../../assets/cart.png";
import man from "../../assets/man.svg";
import arrow from "../../assets/arrow.png";
import TemporaryDrawer from "../SidebarAccordion/mobileDrawer";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  return (
    // Navbar Section

    <Container>
      <NavLink to={"/"}>
        <LogoWrapper>
          <MenuIconRight>
            <TemporaryDrawer />
          </MenuIconRight>
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
        <MenuIcon>
          <TemporaryDrawer />
        </MenuIcon>
      </IconWrapper>
    </Container>
  );
};

export default Navbar;
