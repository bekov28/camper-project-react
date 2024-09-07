import React from "react";
import { BackgroundCamping, ImgCon, MainCon, MainMainCon } from "./style";
import img1 from "../camping/assets/img-1.svg";
import img2 from "../camping/assets/img-2.svg";
import img3 from "../camping/assets/img-3.svg";
import { Link } from "react-router-dom";
import { campcarCampingPage } from "../mock/mockdatacamping";

const CampingPlaceComponent = () => {
  const data = campcarCampingPage.maindata;
  console.log(data);

  return (
    <div>
      <BackgroundCamping>
        <h4 className="back-h4">Home / Camping place</h4>
        <h1 className="back-h1">Camping places</h1>
      </BackgroundCamping>
      <div>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Link
                to={`/camping/${value.id}`}
                style={{ textDecoration: "none" }}
              >
                <MainCon>
                  <ImgCon>
                    <img src={value.camping.photo} alt="img" />
                    <h5>{value.camping.name}</h5>
                    <h6>{value.camping.location}</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={value.camping.photo} alt="img" />
                    <h5>{value.camping.name}</h5>
                    <h6>{value.camping.location}</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={value.camping.photo} alt="img" />
                    <h5>{value.camping.name}</h5>
                    <h6>{value.camping.location}</h6>
                  </ImgCon>
                </MainCon>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampingPlaceComponent;
