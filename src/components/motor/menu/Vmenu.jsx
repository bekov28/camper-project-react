import React from "react";
import "../../styles/style";
import { StarCon, TwoIconCon } from "../../styles/style";

import { Link } from "react-router-dom";
import {
  AlingCon,
  ButtonContainer,
  CarMainCon,
  CarRate,
  LocationDiv,
  NameCon,
  NameWrapper,
  RateCon,
  VmenuWrapper,
} from "./style";
import { campcarVmenu } from "../../mock/mockdataVmenu";
import star from "../../../assets/star.svg";

const Vmenu = () => {
  const data = campcarVmenu.maindata;
  console.log(data);
  return (
    <div>
      <div>
        <VmenuWrapper>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <Link
                  to={`/menu/${value.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <NameWrapper>
                    <div>
                      <img src={value.car.photo} />
                    </div>
                    <CarMainCon>
                      <AlingCon>
                        <NameCon>
                          <h3 className="NameCar">{value.car.name}</h3>
                          <p className="CompanyCar">{value.car.company}</p>
                        </NameCon>
                        <RateCon>
                          <h3>{value.car.cost}</h3>
                          <StarCon>
                            <img src={star} alt="star-icon" />
                            <CarRate>{value.car.rate}</CarRate>
                          </StarCon>
                        </RateCon>
                      </AlingCon>
                      <ButtonContainer>
                        <button className="OrderBtn">Order</button>
                        <button>Сompare</button>
                      </ButtonContainer>
                      <LocationDiv>
                        <p>Location: {value.car.location}</p>
                        <p>People: {value.car.people}</p>
                      </LocationDiv>
                    </CarMainCon>
                  </NameWrapper>
                </Link>
              </div>
            );
          })}
        </VmenuWrapper>
      </div>
    </div>
  );
};

export default Vmenu;
