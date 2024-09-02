import React from "react";
import Slider from "react-slick";
import photo1 from "../carousel/assets/back1.svg";
import photo2 from "../carousel/assets/back2.svg";
import "react-slick";
import "./style.css";
import car1 from "./assets/car-1.svg";
import car2 from "./assets/car-2.svg";
import car3 from "./assets/car-3.svg";
import car4 from "./assets/car-4.svg";
import button from "./assets/group.svg";
import blog1 from "./assets/blog1.svg";
import blog2 from "./assets/blog2.svg";
import blog3 from "./assets/blog3.svg";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import arrow from "./assets/arrow.svg";

import group1 from "./modalassets/group1.svg";
import group2 from "./modalassets/group2.svg";
import group3 from "./modalassets/group3.svg";
import group4 from "./modalassets/group4.svg";
import group5 from "./modalassets/group5.svg";
import group6 from "./modalassets/group6.svg";
import group7 from "./modalassets/group7.svg";
import group8 from "./modalassets/group8.svg";
import { Link } from "react-router-dom";
import ModalComponent from "./modalassets/modal/modal";
import ModalComponent2 from "./modalassets/modal/modal2";
import ModalComponent3 from "./modalassets/modal/modal3";
import ModalComponent4 from "./modalassets/modal/modal4";
import ModalComponent5 from "./modalassets/modal/modal5";
import ModalComponent6 from "./modalassets/modal/modal6";
import ModalComponent7 from "./modalassets/modal/modal7";
import ModalComponent8 from "./modalassets/modal/modal8";

export default function MainCarousel() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <CCarousel controls indicators>
        <CCarouselItem className="ImgCon">
          <CImage src={photo1} alt="slide 1" style={{ width: "100%" }} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage src={photo2} alt="slide 2" style={{ width: "100%" }} />
        </CCarouselItem>
      </CCarousel>
      <div className="Recommend">
        <h4>Recommend</h4>
        <p></p>
      </div>
      <div className="MiniCarouselMain">
        <Slider {...setting}>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" className="ImgSize" />
            <div className="KnausCon">
              <p>로벤투스 S+</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car2} alt="car-2" className="ImgSize" />
            <div className="KnausCon">
              <p>ACIER 790R</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car3} alt="car-3" className="ImgSize" />
            <div className="KnausCon">
              <p>르벤투스 차박S</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car4} alt="car-4" className="ImgSize" />
            <div className="KnausCon">
              <p>DS9eR+a</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" className="ImgSize" />
            <div className="KnausCon">
              <p>로벤투스 S+</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car2} alt="car-2" className="ImgSize" />
            <div className="KnausCon">
              <p>ACIER 790R</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car3} alt="car-3" className="ImgSize" />
            <div className="KnausCon">
              <p>르벤투스 차박S</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car4} alt="car-4" className="ImgSize" />
            <div className="KnausCon">
              <p>DS9eR+a</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" className="ImgSize" />
            <div className="KnausCon">
              <p>로벤투스 S+</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car2} alt="car-2" className="ImgSize" />
            <div className="KnausCon">
              <p>ACIER 790R</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car3} alt="car-3" className="ImgSize" />
            <div className="KnausCon">
              <p>르벤투스 차박S</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="MiniCarousel">
            <img src={car4} alt="car-4" className="ImgSize" />
            <div className="KnausCon">
              <p>DS9eR+a</p>
              <img src={button} alt="button" />
              <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="Recommend">
        <h4>Videos</h4>
        <p></p>
      </div>
      <div className="VideoCon">
        <ModalComponent />
        <ModalComponent2 />
        <ModalComponent3 />
        <ModalComponent4 />
        <ModalComponent5 />
        <ModalComponent6 />
        <ModalComponent7 />
        <ModalComponent8 />
      </div>

      <div className="Recommend">
        <h4>Blogs</h4>
        <p></p>
      </div>
      <div className="MainBlog">
        <div className="BlogLeft">
          <h3>Lorem ipsum</h3>
          <h4>@Lorem ipsum</h4>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam
            eleifend aenean neque in in a quam vivamus
          </h5>
        </div>
        <div className="BlogRight">
          <img src={blog1} alt="photo1" />
          <img src={blog2} alt="photo2" />
          <img src={blog3} alt="photo3" />
          <img src={blog1} alt="photo1" />
          <img src={blog2} alt="photo2" />
          <img src={blog3} alt="photo3" />
        </div>
      </div>
    </div>
  );
}
