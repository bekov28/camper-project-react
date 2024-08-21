import React from "react";
import { campcarTuning } from "../../mock/mockdatatuning";
import { BrandConMainTuning, CarTuningCon } from "../style";
import { Button, CarBtn, CarWrapper, StarCon } from "../../styles/style";
import { Link } from "react-router-dom";
import star from "../../../assets/star.svg";

const Hmenu = () => {
  const data = campcarTuning.maindata;
  console.log(data);

  return (
    <div>
      <CarWrapper>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/tuning/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CarTuningCon>
                  <div>
                    <img src={value.car.photo} />
                  </div>
                  <div>
                    <h3 className="carName">{value.car.name}</h3>
                  </div>
                  <BrandConMainTuning>
                    <p>
                      <div>{value.car.company}</div>
                    </p>
                    <StarCon>
                      <img src={star} alt="star-icon" />
                      <p>
                        {" "}
                        <div>{value.car.rate}</div>
                      </p>
                    </StarCon>
                  </BrandConMainTuning>
                  <h4>
                    <div>{value.car.cost}</div>
                  </h4>
                  <CarBtn>
                    <Button className="order-blue">Order</Button>
                    <Button className="compare-btn">Compare</Button>
                    <Button className="view-detail-btn">View Detail</Button>
                  </CarBtn>
                </CarTuningCon>
              </Link>
            </div>
          );
        })}
      </CarWrapper>
    </div>
  );
};

export default Hmenu;
