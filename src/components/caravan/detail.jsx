import React from "react";
import { Link, useParams } from "react-router-dom";
import { campcarCaravan } from "../mock/mockdatacaravan";
import {
  BackgroundCon,
  ButtonCon,
  CarImageCon,
  CarImgLeft,
  CarNameCon,
  ComfortCon,
  ComfortConLeft,
  ComfortConRight,
  CompanyCon,
  CompanyMainCon,
  DetailedCon,
  ItemReview,
  MainDiv,
  RightDetail,
  RightDetailCon,
  TidyingCon,
  TidyingConLeft,
  TidyingConRight,
} from "../motor/detailStyle";
import BasicTabs from "../tabs/BasicTabsMotor";
import BasicTabsCaravan from "../tabs/BasicTabsCaravan";

const CaravanDetail = () => {
  const { id } = useParams();

  const data = campcarCaravan.maindata;
  const filteredData = data.filter((value) => value.id === parseInt(id));
  console.log(filteredData);

  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div key={index}>
            <BackgroundCon>
              <h3>{value.car.name}</h3>
              <ButtonCon>
                <Link to={`/caravan/:id/${value.id}`}>
                  <button className="addToCart">
                    <p>ADD TO CART</p>
                  </button>
                </Link>
                <button className="compareBtn">
                  <p>COMPARE</p>
                </button>
              </ButtonCon>
            </BackgroundCon>
            <MainDiv>
              <CarImageCon>
                <CarImgLeft>
                  <img src={value.car.photo} />
                </CarImgLeft>
                <RightDetail>
                  <RightDetailCon>
                    <CarNameCon>
                      <h3 className="carNameStyle">{value.car.name}</h3>
                      <h2 className="locationStyle">{value.car.location}</h2>
                    </CarNameCon>
                    <h3 className="costNameStyle">{value.car.cost}</h3>
                  </RightDetailCon>

                  <CompanyMainCon>
                    <CompanyCon>
                      <h3>Company</h3>
                      <h3>People</h3>
                      <h3>License type</h3>
                    </CompanyCon>
                    <DetailedCon>
                      <h3>{value.car.company}</h3>
                      <h3>{value.car.people}</h3>
                      <h3>{value.car.license}</h3>
                    </DetailedCon>
                  </CompanyMainCon>
                </RightDetail>
              </CarImageCon>

              <ComfortCon>
                <ComfortConLeft>
                  <h2>Comfort</h2>
                  <h4>{value.car.word}</h4>
                </ComfortConLeft>
                <ComfortConRight>
                  <img src={value.photo1} />
                </ComfortConRight>
              </ComfortCon>

              <TidyingCon>
                <TidyingConLeft>
                  <img src={value.photo2} />
                </TidyingConLeft>
                <TidyingConRight>
                  <h2>Tidying away is child’s play!</h2>
                  <h4>{value.car.word1}</h4>
                </TidyingConRight>
              </TidyingCon>

              <ComfortCon>
                <ComfortConLeft>
                  <h2>Ventilated , Lit up</h2>
                  <h4>{value.car.word2}</h4>
                </ComfortConLeft>
                <ComfortConRight>
                  <img src={value.photo3} />
                </ComfortConRight>
              </ComfortCon>

              <TidyingCon>
                <TidyingConLeft>
                  <img src={value.photo4} />
                </TidyingConLeft>
                <TidyingConRight>
                  <h2>Easy access</h2>
                  <h4>{value.car.word3}</h4>
                </TidyingConRight>
              </TidyingCon>

              <ComfortCon>
                <ComfortConLeft>
                  <h2>Heating when driving</h2>
                  <h4>{value.car.word4}</h4>
                  <ButtonCon>
                    <Link to={`/caravan/:id/${value.id}`}>
                      <button className="compareBtn2">
                        <p>ADD TO CART</p>
                      </button>
                    </Link>
                    <button className="compareBtn2">
                      <p>COMPARE</p>
                    </button>
                  </ButtonCon>
                </ComfortConLeft>
                <ComfortConRight>
                  <img src={value.photo5} />
                </ComfortConRight>
              </ComfortCon>
              <ItemReview>
                <BasicTabsCaravan />
              </ItemReview>
            </MainDiv>
          </div>
        );
      })}
    </div>
  );
};

export default CaravanDetail;
