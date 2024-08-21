import React from "react";
import { AlingConTuning, ButtonContainerTun, CarMainConTuning, CarRateTuning, ImgConTuning, LocationDivTun, NameConTuning, NameWrapperTuning, RateConTuning, VmenuTuning } from "./style";
import { campcarTuningVmenu } from "../../mock/mockdatatuningTuning";
import { Link } from "react-router-dom";
import { StarCon } from "../../styles/style";
import star from "../../../assets/star.svg";

const Vmenu = () => {
  const data = campcarTuningVmenu.maindata;
  console.log(data);

  return (
    <div>
      <VmenuTuning>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/menu/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NameWrapperTuning>
                  <ImgConTuning>
                    <img src={value.car.photo} />
                  </ImgConTuning>
                  <CarMainConTuning>
                    <AlingConTuning>
                      <NameConTuning>
                        <h3 className="NameCar">{value.car.name}</h3>
                        <p className="CompanyCar">{value.car.company}</p>
                      </NameConTuning>
                      <RateConTuning>
                        <h3>{value.car.cost}</h3>
                        <StarCon>
                          <img src={star} alt="star-icon" />
                          <CarRateTuning>{value.car.rate}</CarRateTuning>
                        </StarCon>
                      </RateConTuning>
                    </AlingConTuning>
                    <ButtonContainerTun>
                      <button className="OrderBtn">Order</button>
                      <button>Сompare</button>
                    </ButtonContainerTun>
                    <LocationDivTun>
                      <p>Location: {value.car.location}</p>
                      <p>People: {value.car.people}</p>
                    </LocationDivTun>
                  </CarMainConTuning>
                </NameWrapperTuning>
              </Link>
            </div>
          );
        })}
      </VmenuTuning>
    </div>
  );
};

export default Vmenu;
