import React from "react";
import { campcarCaravanVmenu } from "../../mock/mockdatacaravanVmenu";
import { AlingCon, ButtonContainer, CarMainCon, CarRate, LocationDiv, NameCon, NameWrapper, RateCon, VmenuWrapper } from "../../motor/menu/style";
import { Link } from "react-router-dom";
import { StarCon } from "../../styles/style";
import star from "../../../assets/star.svg";
import { AlingConCaravan, ButtonContainerCar, CarMainConCaravan, CarRateCaravan, ImgCon, LocationDivCar, NameConCaravan, NameWrapperCaravan, RateConCaravan, VmenuCaravan } from "./style";


const Vmenu = () => {
  const data = campcarCaravanVmenu.maindata;
  console.log(data);
  return (
    <div>
      <VmenuCaravan>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/menu/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NameWrapperCaravan>
                  <ImgCon>
                    <img src={value.car.photo} />
                  </ImgCon>
                  <CarMainConCaravan>
                    <AlingConCaravan>
                      <NameConCaravan>
                        <h3 className="NameCar">{value.car.name}</h3>
                        <p className="CompanyCar">{value.car.company}</p>
                      </NameConCaravan>
                      <RateConCaravan>
                        <h3>{value.car.cost}</h3>
                        <StarCon>
                          <img src={star} alt="star-icon" />
                          <CarRateCaravan>{value.car.rate}</CarRateCaravan>
                        </StarCon>
                      </RateConCaravan>
                    </AlingConCaravan>
                    <ButtonContainerCar>
                      <button className="OrderBtn">Order</button>
                      <button>Сompare</button>
                    </ButtonContainerCar>
                    <LocationDivCar>
                      <p>Location: {value.car.location}</p>
                      <p>People: {value.car.people}</p>
                    </LocationDivCar>
                  </CarMainConCaravan>
                </NameWrapperCaravan>
              </Link>
            </div>
          );
        })}
      </VmenuCaravan>
    </div>
  );
};

export default Vmenu;
