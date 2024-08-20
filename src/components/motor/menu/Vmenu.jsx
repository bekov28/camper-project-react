import React from "react";
import "../../styles/style";
import {
  BackgroundImg,
  BrandCon,
  BrandConMain,
  ButtonCon,
  CarBtn,
  CarOneCon,
  CarWrapper,
  CompanyCon,
  CompareCon,
  CostOfCar,
  GridIcon,
  ItemCon,
  ItemContainer,
  ItemFirstCon,
  LicenseCon,
  LocationCon,
  MainBodyCon,
  MainItemCon,
  NoShow,
  NumberCon,
  RoundIcon,
  SelectCon,
  SelectCon2,
  SideBarCon,
  SixtyCon,
  SixtyCon2,
  SortCon,
  SortConRight,
  StarCon,
  TwoIconCon,
} from "../../styles/style";
import arrow from "../../../assets/big-arrow.svg";
import car1 from "../../../assets/img-1.png";
import car2 from "../../../assets/img-1.png";
import car3 from "../../../assets/img-1.png";
import itemarrow from "../../../assets/item-arrow.svg";
import grid from "../../motor/menu/assets/grid.svg";
import round from "../../motor/menu/assets/vmenu.svg";
// import wrappercar1 from "../../assets/car-1.png";
import star from "../../../assets/star.svg";
// import wrappercar3 from "../../assets/car-3.png";
// import wrappercar2 from "../../assets/car-2.png";
// import wrappercar4 from "../../assets/car-4.png";
import { campcar } from "../../mock/motor";
import { Link } from "react-router-dom";
import { Button } from "../style";
import { VmenuWrapper } from "./style";
import { campcarVmenu } from "../../mock/mockdataVmenu";

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
                  <CarWrapper>
                    <img src={value.car.photo} />
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </CarWrapper>
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
