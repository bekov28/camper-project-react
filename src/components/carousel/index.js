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
import arrow from "./assets//arrow.svg";
import button from "./assets/group.svg";
import blog1 from "./assets/blog1.svg";
import blog2 from "./assets/blog2.svg";
import blog3 from "./assets/blog3.svg";

export default function MainCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
              <p>로벤투스 S+</p>
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
