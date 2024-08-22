import React from "react";
import { Link, useParams } from "react-router-dom";
import { campcar } from "../mock/motor";
import {
  BackgroundCon,
  BackgroundDiv,
  ButtonCon,
  CarImageCon,
  CarImgLeft,
  RightDetail,
} from "./detailStyle";
import { Button } from "../styles/style";

const MotorDetail = () => {
  const { id } = useParams();

  const data = campcar.maindata;
  // console.log(data);
  // console.log(id);

  const filteredData = data.filter((value) => value.id === parseInt(id));
  console.log(filteredData);
  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div key={index}>
            <BackgroundCon>
              <h3>{value.car.name}</h3>
              <ButtonCon>
                <button className="addToCart">
                  <p>ADD TO CART</p>
                </button>
                <button className="compareBtn">
                  <p>COMPARE</p>
                </button>
              </ButtonCon>
            </BackgroundCon>
            <CarImageCon>
              <CarImgLeft>
                <img src={value.car.photo} />
              </CarImgLeft>
              <RightDetail>
                
              </RightDetail>
            </CarImageCon>
          </div>
        );
      })}
    </div>
  );
};

export default MotorDetail;
