import React from "react";
import {
  ButtonCon,
  CarContainer,
  CarContainer2,
  CarContainer3,
  CarContainerMain,
  CompareBackImg,
  CompareCon,
  CompareModelsCon,
  CompareModelsMainCon,
  ImgCon,
  ImgConMini,
  ModelCon,
} from "./style";
import "./style";
import ellipse from "./assets/ellipse.svg";
import car from "./assets/car.svg";
import arrow from "./assets/arrow.svg";
import CompareAccordion from "./CompareAccordion/Accordion";

const ComparePage = () => {
  return (
    <div>
      <CompareBackImg>
        <h3>Home / Motors / Compare</h3>
        <p>Compare our models</p>
      </CompareBackImg>
      <CompareCon>
        <CompareModelsMainCon>
          <CompareModelsCon>
            <p>Compare Models</p>
            <img src={ellipse} />
          </CompareModelsCon>
          <CarContainerMain>
            <CarContainer>
              <ImgCon>
                <ImgConMini>
                  <img src={car} />
                </ImgConMini>
                <p>Name of car</p>
              </ImgCon>
              <div style={{ marginTop: "30px" }}>
                <CompareAccordion />
              </div>
              <ButtonCon>Order</ButtonCon>
            </CarContainer>
            <CarContainer2>
              <ImgCon>
                <ImgConMini>
                  <img src={car} />
                </ImgConMini>
                <p>Name of car</p>
              </ImgCon>
              <div style={{ marginTop: "30px" }}>
                <CompareAccordion />
              </div>
              <ButtonCon>Order</ButtonCon>
            </CarContainer2>
            <CarContainer3>
              <ImgCon>
                <ImgConMini>
                  <img src={car} />
                </ImgConMini>
                <p>Name of car</p>
              </ImgCon>
              <div style={{ marginTop: "30px" }}>
                <CompareAccordion />
              </div>
              <ButtonCon>Order</ButtonCon>
            </CarContainer3>
          </CarContainerMain>
        </CompareModelsMainCon>
      </CompareCon>
    </div>
  );
};

export default ComparePage;
