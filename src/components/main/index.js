import React from "react";
import Slider from "react-slick";
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
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "./assets/arrow.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import back1 from "./assets/back1.svg";
import back2 from "./assets/back2.svg";
import AppModal from "./modal/popup/videoCon";



export default function MainPage() {
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
      <Carousel showThumbs={false}>
        <div>
          <img src={back1} />
        </div>
        <div>
          <img src={back2} />
        </div>
      </Carousel>
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

      <AppModal />

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
