import React from "react";
import { campcarCaravan } from "../../mock/mockdatacaravan";
import { Button, CarBtn, CarWrapper, StarCon } from "../../styles/style";
import { Link } from "react-router-dom";
import { BrandConMainCaravan, CaravanCon } from "../style";
import star from "../../../assets/star.svg";

const Hmenu = () => {
  const data = campcarCaravan.maindata;
  console.log(data);

  return (
    <div>
      <CarWrapper>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/caravan/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CaravanCon>
                  <div>
                    <img src={value.car.photo} />
                  </div>
                  <div>
                    <h3 className="carName">{value.car.name}</h3>
                  </div>
                  <BrandConMainCaravan>
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
                  </BrandConMainCaravan>
                  <h4>
                    <div>{value.car.cost}</div>
                  </h4>
                  <CarBtn>
                    <Button className="order-blue">Order</Button>
                    <Button className="compare-btn">Compare</Button>
                    <Button className="view-detail-btn">View Detail</Button>
                  </CarBtn>
                </CaravanCon>
              </Link>
            </div>
          );
        })}
      </CarWrapper>
    </div>
  );
};

export default Hmenu;
