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
import car1 from "../../assets/img-1.png";
import car2 from "../../assets/img-1.png";
import car3 from "../../assets/img-1.png";
import itemarrow from "../../assets/item-arrow.svg";
import grid from "../../assets/grid.svg";
import round from "../../assets/round.svg";
import { campcarCaravan } from "../mock/mockdatacaravan";
import { Link } from "react-router-dom";
import star from "../../assets/star.svg";
import { BackgroundCar, BrandConMainCaravan, CaravanCon } from "./style";
import Hmenu from "./menu/Hmenu";
import Vmenu from "./menu/Vmenu";

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
      <MainBodyCon>
        <SideBarCon>
          <CostOfCar>
            <h3 className="h3-style">Cost of car</h3>
            <div className="FromTwoCon">
              <div>
                <h4>from</h4>
                <input type="text" className="CostInput" />
              </div>
              <div>
                <h4>to</h4>
                <input type="text" className="CostInput" />
              </div>
            </div>
          </CostOfCar>
          <BrandCon>
            <div className="brand-arrow-con h3-style">
              <p>Brand</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="aidal-wrapper">
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Aidal</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Knal</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>escape</p>
              </div>
            </div>
          </BrandCon>
          <CompanyCon>
            <div className="brand-arrow-con h3-style">
              <p>Company</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>escape</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Aidal</p>
              </div>
            </div>
          </CompanyCon>
          <LicenseCon>
            <div className="brand-arrow-con h3-style">
              <p>License type</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>1 year</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>2 year</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>1.5year</p>
              </div>
            </div>
          </LicenseCon>
          <NumberCon>
            <div class="brand-arrow-con h3-style">
              <p>Number of travelers</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div class="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>2</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>3-4</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>5+</p>
              </div>
            </div>
          </NumberCon>
          <LocationCon>
            <div className="brand-arrow-con h3-style">
              <p>Location</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Seoul</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Korea</p>
              </div>
              <div className="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Pusan</p>
              </div>
            </div>
          </LocationCon>
          <ButtonCon>
            <button className="yellow-btn">Cancel</button>
            <button className="blue-btn">Search</button>
          </ButtonCon>
          <CompareCon>
            <p>Compare</p>
            <div className="car-img-con">
              <img src={car1} alt="car-1" />
              <img src={car2} alt="car-2" />
              <img src={car3} alt="car-3" />
            </div>
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
          <div>
            {active ? <Hmenu/> : <Vmenu/>}
          </div>
        </MainItemCon>
      </MainBodyCon>
    </div>
  );
};

export default CaravanComponent;
