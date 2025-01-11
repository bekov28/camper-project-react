import React from "react";
import {
  BrandConMain,
  Button,
  CarBtn,
  CarOneCon,
  CarWrapper,
  ItemCon,
  ItemContainer,
  ItemFirstCon,
  SelectCon,
  SixtyCon,
  SortCon,
  SortConRight,
  StarCon,
  TwoIconCon,
} from "../../styles/style";
import { Link } from "react-router-dom";
import star from "../../../assets/star.svg";
import { campcar } from "../../mock/motor";


const Hmenu = () => {
  const data = campcar.maindata;
  console.log(data);

  return (
    
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
                    <button className="order-blue">Order</button> 
                    <button className="compare-btn">Compare</button>
                    <button className="view-detail-btn">View Detail</button>
                  </CarBtn>
                </CarOneCon>
              </Link>
            </div>
          );
        })}
      </CarWrapper>
    </div>
  );
};

export default Hmenu;
