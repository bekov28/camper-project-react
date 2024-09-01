import React from "react";
import { campcar } from "../mock/motor";
import { useParams } from "react-router-dom";
// import { CartCon } from "./cart-style";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "./cart-style.css";

const DetailCart = () => {
  const { id } = useParams();
  const data = campcar.maindata;
  const filteredData = data.filter((value) => value.id === parseInt(id));
  console.log(filteredData);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: "811px",
    height: "406px",
  };

  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div key={index} className="MainCon">
            <div className="CartCon">
              Cart
              <p></p>
            </div>
            <div className="MainContainer">
              <div className="SliderMain">
                <Slider {...settings} className="SliderCon">
                  <div className="ImgContainer">
                    <img src={value.car.photo} />
                  </div>
                  <div className="ImgContainer">
                    <img src={value.photo1} />
                  </div>
                </Slider>
                <div className="PurchaseCon">
                  <p>Purchase price: {value.car.cost}</p>
                </div>
              </div>
              <div className="SidebarCon"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailCart;
