import React from "react";
import { Button, CarBtn, CarWrapper } from "../../styles/style";
import { Link } from "react-router-dom";
import { BrandConMainUsed, StarConUsed, UsedOneCon } from "../style";
import star from "../../../assets/star.svg";
import { campcarUsedCar } from "../../mock/mockdatausedcar";

const Hmenu = () => {
  const data = campcarUsedCar.maindata;
  console.log(data);

  return (
    <div>
      <CarWrapper>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/usedCar/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <UsedOneCon>
                  <div>
                    <img src={value.car.photo} />
                  </div>
                  <div>
                    <h3 className="carName">{value.car.name}</h3>
                  </div>
                  <BrandConMainUsed>
                    <p>
                      <div>{value.car.company}</div>
                    </p>
                    <StarConUsed>
                      <img src={star} alt="star-icon" />
                      <p>
                        {" "}
                        <div>{value.car.rate}</div>
                      </p>
                    </StarConUsed>
                  </BrandConMainUsed>
                  <h4>
                    <div>{value.car.cost}</div>
                  </h4>
                  <CarBtn>
                    <Button className="order-blue">Order</Button>
                    <Button className="compare-btn">Compare</Button>
                    <Button className="view-detail-btn">View Detail</Button>
                  </CarBtn>
                </UsedOneCon>
              </Link>
            </div>
          );
        })}
      </CarWrapper>
    </div>
  );
};

export default Hmenu;
