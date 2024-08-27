import React from "react";
import Slider from "react-slick";
import photo1 from "../carousel/assets/back1.svg";
import photo2 from "../carousel/assets/back2.svg";
import "react-slick";
import MultipleItems from "./multiCarousel";
import "./style.css";
import car1 from "./assets/car-1.svg";
import car2 from "./assets/car-2.svg";
import car3 from "./assets/car-3.svg";
import car4 from "./assets/car-4.svg";

export default function MainCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div>
      <Slider {...settings} className="SliderCon">
        <div>
          <img src={photo1} alt="car-1" className="ImgCon" />
        </div>
        <div>
          <img src={photo2} alt="car-2" className="ImgCon" />
        </div>
      </Slider>
      <div className="Recommend">
        <h4>Recommend</h4>
        <p></p>
      </div>
      <div className="MiniCarouselMain">
        <Slider {...setting}>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" />
          </div>
          <div className="MiniCarousel">
            <img src={car2} alt="car-2" />
          </div>
          <div className="MiniCarousel">
            <img src={car3} alt="car-3" />
          </div>
          <div className="MiniCarousel">
            <img src={car4} alt="car-4" />
          </div>
          <div className="MiniCarousel"></div>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" />
          </div>
          <div className="MiniCarousel">
            <img src={car2} alt="car-2" />
          </div>
          <div className="MiniCarousel">
            <img src={car3} alt="car-3" />
          </div>
          <div className="MiniCarousel">
            <img src={car4} alt="car-4" />
          </div>
          <div className="MiniCarousel"></div>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" />
          </div>
          <div className="MiniCarousel">
            <img src={car2} alt="car-2" />
          </div>
          <div className="MiniCarousel">
            <img src={car3} alt="car-3" />
          </div>
          <div className="MiniCarousel">
            <img src={car4} alt="car-4" />
          </div>
          <div className="MiniCarousel"></div>
          <div className="MiniCarousel">
            <img src={car1} alt="car-1" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
