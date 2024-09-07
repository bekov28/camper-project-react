import React, { useState } from "react";
import {
  BackgroundImg,
  BrandCon,
  BrandConMain,
  Button,
  ButtonCon,
  CarBtn,
  CarOneCon,
  CarWrapper,
  CompanyCon,
  CompareCon,
  CostOfCar,
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
import { campcarCaravan } from "../mock/mockdatacaravan";
import { Link } from "react-router-dom";
import star from "../../assets/star.svg";
import { BackgroundCar, BrandConMainCaravan, CaravanCon } from "./style";
import Hmenu from "./menu/Hmenu";
import Vmenu from "./menu/Vmenu";
import AccordionUsage from "../SidebarAccordion";
import CompareBtn from "../motor/CompareBtn";

const CaravanComponent = () => {
  const data = campcarCaravan.maindata;
  console.log(data);

  const [active, setActive] = useState(true);

  function caravanClick() {
    setActive(true);
  }
  function vmenuClick() {
    setActive(false);
  }

  return (
    <div>
      <BackgroundCar>
        <h3 className="back-h3">Home / Motors</h3>
        <h2 className="back-h2">Our ranges</h2>
        <h1 className="back-h1">Caravan</h1>
      </BackgroundCar>
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
              <Link to={`/Compare/:id/`} style={{ textDecoration: "none" }}>
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
                    <button onClick={caravanClick} className="GridStyle">
                      {" "}
                      <img src={grid} alt="grid-icon" />
                    </button>
                    <button onClick={vmenuClick} className="RoundStyle">
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

export default CaravanComponent;
