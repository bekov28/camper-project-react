import React from "react";
import { Link, useParams } from "react-router-dom";
import { campcar } from "../mock/motor";
import {
  BackgroundCon,
  BackgroundDiv,
  ButtonCon,
  CarImageCon,
  CarImgLeft,
  CompanyCon,
  CompanyMainCon,
  DetailedCon,
  RightDetail,
  RightDetailCon,
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
                <RightDetailCon>
                  <div>
                    <h3 className="carNameStyle">{value.car.name}</h3>
                    <h2 className="locationStyle">{value.car.location}</h2>
                  </div>
                  <h3 className="costNameStyle">{value.car.cost}</h3>
                </RightDetailCon>
               
                <CompanyMainCon>
                  <CompanyCon>
                    <h3>Company</h3>
                    <h3>People</h3>
                    <h3>License type</h3>
                  </CompanyCon>
                  <DetailedCon>
                    <h3>{value.car.company}</h3>
                    <h3>{value.car.people}</h3>
                    <h3>{value.car.license}</h3>
                  </DetailedCon>
                </CompanyMainCon>
              </RightDetail>
            </CarImageCon>
          </div>
        );
      })}
    </div>
  );
};

export default MotorDetail;
