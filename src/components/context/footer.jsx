import React from "react";
import {
  CamperConTwo,
  ContactCon,
  ContactImgCon,
  Instagram,
  MainFooterCon,
  MenuCon,
  Naver,
  ServicesCon,
  Youtube,
} from "../styles/style";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/insta.svg";
import naver from "../../assets/naver.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <MainFooterCon>
      <CamperConTwo>
        <Link to={"/"}>
          <p>Camper</p>
        </Link>
        <Link to={"/"}>
          <div className="logo-icon">Logo</div>
        </Link>
      </CamperConTwo>
      <ServicesCon>
        <h3 className="h3-footer">Services</h3>
        <br />
        <br />
        <p>Camping</p>
        <p>Lodging</p>
        <p>Harbor</p>
        <p>Day Use</p>
      </ServicesCon>
      <MenuCon>
        <h3 className="h3-footer">Menu</h3>
        <br />
        <br />
        <p>About</p>
        <p>Services</p>
        <p>Booking</p>
        <p>Blog</p>
      </MenuCon>
      <ContactCon>
        <h3 class="h3-footer">Contact</h3>
        <br />
        <br />
        <ContactImgCon>
          <Youtube src={youtube} alt="youtube" />
          <Instagram src={instagram} alt="instagram" />
          <Naver src={naver} alt="naver" />
        </ContactImgCon>
        <p>021 Korea Seul, LA</p>
        <p>camper@example.com</p>
        <p>(021) 345-6789-99</p>
      </ContactCon>
    </MainFooterCon>
  );
};

export default Footer;
