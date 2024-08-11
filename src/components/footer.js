import React from "react";
import "./style.css";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/insta.svg";
import naver from "../assets/naver.svg";

const Footer = () => {
  return (
    <div>
      <div class="main-footer-con">
        <div class="camper-con-two">
          <p>Camper</p>
        </div>
        <div class="logo-icon">Logo</div>
        <div class="services-con">
          <h3 class="h3-footer">Services</h3>
          <br />
          <br />
          <p>Camping</p>
          <p>Lodging</p>
          <p>Harbor</p>
          <p>Day Use</p>
        </div>
        <div class="menu-con">
          <h3 class="h3-footer">Menu</h3>
          <br />
          <br />
          <p>About</p>
          <p>Services</p>
          <p>Booking</p>
          <p>Blog</p>
        </div>
        <div class="contact-con">
          <h3 class="h3-footer">Contact</h3>
          <br />
          <br />
          <div class="contact-img-con">
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
            <img src={naver} alt="naver" />
          </div>
          <p>021 Korea Seul, LA</p>
          <p>camper@example.com</p>
          <p>(021) 345-6789-99</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
