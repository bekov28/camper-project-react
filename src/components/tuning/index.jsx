import React from "react";
import { BackgroundImg, BrandCon, BrandConMain, Button, ButtonCon, CarBtn, CarOneCon, CarWrapper, CompanyCon, CompareCon, CostOfCar, ItemCon, ItemContainer, ItemFirstCon, LicenseCon, LocationCon, MainBodyCon, MainItemCon, NoShow, NumberCon, SelectCon, SelectCon2, SideBarCon, SixtyCon, SixtyCon2, SortCon, SortConRight, StarCon, TwoIconCon } from "../styles/style";
import arrow from "../../assets/big-arrow.svg";
import car1 from "../../assets/img-1.png";
import car2 from "../../assets/img-1.png";
import car3 from "../../assets/img-1.png";
import itemarrow from "../../assets/item-arrow.svg";
import grid from "../../assets/grid.svg";
import round from "../../assets/round.svg";
import { Link } from "react-router-dom";
import star from "../../assets/star.svg";
import { campcarTuning } from "../mock/mockdatatuning";
import { BackgroundTuning, BrandConMainTuning, CarTuningCon } from "./style";


const TuningComponent = () => {
  const data=campcarTuning.maindata;
  console.log(data);
  return (
    <div>
      <BackgroundTuning>
        <h3 className="back-h3">Home / Motors</h3>
        <h2 className="back-h2">Our ranges</h2>
        <h1 className="back-h1">Tuning</h1>
      </BackgroundTuning>
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
                <button className="GridStyle">
                    {" "}
                    <img src={grid} alt="grid-icon" />
                  </button>
                  <button className="RoundStyle">
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
        </MainItemCon>
      </MainBodyCon>
    </div>
  );
};

export default TuningComponent;
