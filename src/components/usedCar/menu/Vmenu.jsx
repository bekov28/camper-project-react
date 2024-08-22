import React from "react";
import { campcarUsedCar } from "../../mock/mockdatausedcar";
import { campcarUsedCarVmenu } from "../../mock/mockdatausedcarVmenu";
import {
  AlingConUsed,
  ButtonContainerUsed,
  CarMainConUsed,
  CarRateUsed,
  ImgConUsed,
  LocationDivUsed,
  NameConUsed,
  NameWrapperUsed,
  RateConUsed,
  VmenuUsedCar,
} from "./style";
import { Link } from "react-router-dom";
import { StarCon } from "../../styles/style";
import star from "../../../assets/star.svg";

const Vmenu = () => {
  const data = campcarUsedCarVmenu.maindata;
  console.log(data);

  return (
    <div>
      <VmenuUsedCar>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/menu/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NameWrapperUsed>
                  <ImgConUsed>
                    <img src={value.car.photo} />
                  </ImgConUsed>
                  <CarMainConUsed>
                    <AlingConUsed>
                      <NameConUsed>
                        <h3 className="NameCar">{value.car.name}</h3>
                        <p className="CompanyCar">{value.car.company}</p>
                      </NameConUsed>
                      <RateConUsed>
                        <h3>{value.car.cost}</h3>
                        <StarCon>
                          <img src={star} alt="star-icon" />
                          <CarRateUsed>{value.car.rate}</CarRateUsed>
                        </StarCon>
                      </RateConUsed>
                    </AlingConUsed>
                    <ButtonContainerUsed>
                      <button className="OrderBtn">Order</button>
                      <button>Сompare</button>
                    </ButtonContainerUsed>
                    <LocationDivUsed>
                      <p>Location: {value.car.location}</p>
                      <p>People: {value.car.people}</p>
                    </LocationDivUsed>
                  </CarMainConUsed>
                </NameWrapperUsed>
              </Link>
            </div>
          );
        })}
      </VmenuUsedCar>
    </div>
  );
};

export default Vmenu;
