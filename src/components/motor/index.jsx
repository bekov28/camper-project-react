import React, { useState } from "react";
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
  MainBodyMain,
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
} from "../styles/style";
import arrow from "../../assets/big-arrow.svg";
import car1 from "../../assets/compare1.svg";
import car2 from "../../assets/compare2.svg";
import car3 from "../../assets/compare3.svg";
import itemarrow from "../../assets/item-arrow.svg";
import grid from "../../assets/grid.svg";
import round from "../../assets/round.svg";
// import wrappercar1 from "../../assets/car-1.png";
import star from "../../assets/star.svg";
// import wrappercar3 from "../../assets/car-3.png";
// import wrappercar2 from "../../assets/car-2.png";
// import wrappercar4 from "../../assets/car-4.png";
import { campcar } from "../mock/motor";
import { Link } from "react-router-dom";
import { Button } from "./style";
import Hmenu from "./menu/Hmenu";
import Vmenu from "./menu/Vmenu";
import AccordionUsage from "../SidebarAccordion";
import IconLabelButtons from "./Button";
import CompareBtn from "./CompareBtn";
import { JoinFullSharp } from "@mui/icons-material";

const MotorComponent = () => {
  const data = campcar.maindata;
  // console.log(data);

  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(true);
  }
  function handleVmenu() {
    setActive(false);
  }

  return (
    <div>
      <BackgroundImg>
        <h3 className="back-h3">Home / Motors</h3>
        <h2 className="back-h2">Our ranges</h2>
        <h1 className="back-h1">Motors</h1>
      </BackgroundImg>
      <MainBodyMain>
        <MainBodyCon>
          <SideBarCon>
            <AccordionUsage />
            <CompareCon>
              <p>Compare</p>
              <div className="car-img-con">
                <img src={car1} alt="car-1" />
                <img src={car2} alt="car-2" />
                <img src={car3} alt="car-3" />
              </div>
              <Link to={`/Compare/`} style={{ textDecoration: "none" }}>
                <CompareBtn />
              </Link>
            </CompareCon>
          </SideBarCon>
          <MainItemCon>
            <ItemContainer>
              <ItemFirstCon>
                <ItemCon>
                  <p>Item</p>
                  <strong>25.156</strong>
                </ItemCon>
                <SortConRight>
                  <SortCon>
                    <p>Sort by</p>
                    <SelectCon>
                      <input type="select" placeholder="Select" />
                      <img src={itemarrow} alt="item-arrow" />
                    </SelectCon>
                    <SixtyCon>
                      <input type="select" placeholder="60" />
                      <img src={itemarrow} alt="item-arrow" />
                    </SixtyCon>
                  </SortCon>
                  <TwoIconCon>
                    <button onClick={handleClick} className="GridStyle">
                      {" "}
                      <img src={grid} alt="grid-icon" />
                    </button>
                    <button onClick={handleVmenu} className="RoundStyle">
                      <img src={round} alt="round-icon" />
                    </button>
                  </TwoIconCon>
                </SortConRight>
              </ItemFirstCon>
            </ItemContainer>
            <NoShow>
              <p>Sort by</p>
              <SelectCon2>
                <input type="select" placeholder="Select" />
                <img src={arrow} alt="" />
              </SelectCon2>
              <SixtyCon2>
                <input type="select" placeholder="60" />
                <img src={arrow} alt="" />
              </SixtyCon2>
            </NoShow>
            <div>{active ? <Hmenu /> : <Vmenu />}</div>
          </MainItemCon>
        </MainBodyCon>
      </MainBodyMain>
    </div>
  );
};

export default MotorComponent;
