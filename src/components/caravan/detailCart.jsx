import React from "react";
import { useParams } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import { campcarCaravan } from "../mock/mockdatacaravan";
import "../motor/cart-style.css";

const DetailCartCaravan = () => {
  const { id } = useParams();
  const data = campcarCaravan.maindata;
  const filteredData = data.filter((value) => value.id === parseInt(id));
  console.log(filteredData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // width: "811px",
    // height: "406px",
  };

  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div key={index} className="MainCon">
            <div className="CartCon">
              Cart
              <p></p>
            </div>{" "}
            <div className="MainContainer">
              <div className="SliderMain">
                <Slider {...settings} className="SliderCon">
                  <div className="ImgContainer">
                    <img src={value.car.photo} />
                  </div>
                  <div className="ImgContainer">
                    <img src={value.car.photo} />
                  </div>
                </Slider>
                <div className="PurchaseCon">
                  <p>
                    Purchase price: <strong>{value.car.cost}</strong>
                  </p>
                </div>
              </div>
              <div className="SidebarCon">
                <div className="CarNameCon">
                  <div className="ResponsiveCon">
                    <h3>{value.car.name}</h3>
                    <h2>{value.car.cost}</h2>
                  </div>
                  <h4>Description</h4>
                  <p>{value.car.word}</p>
                  <button className="BtnCon">Continue to payment</button>
                </div>
                <div className="EnterAccountCon">
                  <h2>Enter Account Details</h2>
                  <h3>First name</h3>
                  <input type="text" placeholder="First name"></input>
                  <h3>Last name</h3>
                  <input type="text" placeholder="Last name"></input>
                  <h3>Email</h3>
                  <input type="email" placeholder="Your email"></input>
                  <h3>Mobile Phone Number</h3>
                  <input
                    type="number"
                    placeholder="Mobile Phone Number"
                  ></input>
                </div>
                <br></br>
                <div className="EnterAccountCon">
                  <h2>Card</h2>
                  <h3>Name on card</h3>
                  <input type="text" placeholder="Name on card"></input>
                  <h3>Card Number</h3>
                  <input type="number" placeholder="Card Number"></input>
                  <h3>Expiration Month</h3>
                  <input type="month" placeholder="01"></input>
                  <h3>Expiration Year</h3>
                  <input type="date" placeholder="2022"></input>
                  <h3>CVV</h3>
                  <input type="number" placeholder="CVV"></input>
                  <h3>Billing Zip Cod</h3>
                  <input type="number" placeholder="Billing Zip Cod"></input>
                  <button className="BottomBtn">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailCartCaravan;
