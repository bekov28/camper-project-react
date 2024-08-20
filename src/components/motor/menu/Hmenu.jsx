import React from "react";
import {
  BrandConMain,
  Button,
  CarBtn,
  CarOneCon,
  CarWrapper,
  StarCon,
} from "../style";
import { Link } from "react-router-dom";
import { campcar } from "../../mock/motor";
import star from "../../../assets/star.svg";

const Hmenu = () => {
  const data = campcar.maindata;
  console.log(data);

  return (
    <div>
      <div>
        <CarWrapper>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <Link
                  to={`/motor/${value.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <CarOneCon>
                    <div>
                      <img src={value.car.photo} />
                    </div>
                    <div>
                      <h3 className="carName">{value.car.name}</h3>
                    </div>
                    <BrandConMain>
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
                    </BrandConMain>
                    <h4>
                      <div>{value.car.cost}</div>
                    </h4>
                    <CarBtn>
                      <Button className="order-blue">Order</Button>
                      <Button className="compare-btn">Compare</Button>
                      <Button className="view-detail-btn">View Detail</Button>
                    </CarBtn>
                  </CarOneCon>
                </Link>
              </div>
            );
          })}
        </CarWrapper>
      </div>
    </div>
  );
};

export default Hmenu;
