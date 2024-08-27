import React from "react";
import { useParams } from "react-router-dom";
import { campcarCamping } from "../mock/mockdatacamping";
import pic1 from "../camping/assets/img-1.svg";
import pic2 from "../camping/assets/img-2.svg";
import pic3 from "../camping/assets/img-3.svg";
import location from "../camping/assets/carbon_location.svg";
import clock from "../camping/assets/bi_clock.svg";
import phone from "../camping/assets/carbon_phone.svg";
import home from "../camping/assets/codicon_home.svg";
import map from "../camping/assets/map.svg";
import {
  CampingCon,
  DescripCon,
  DetailImg,
  KoreaCon,
  KoreaCon2,
  KoreaDiv,
  KoreaMini,
  LocationCon,
  MainContainer,
  MainDiv,
  SurfyyCon,
} from "./style";

const CampingDetail = () => {
  const { id } = useParams();

  const data = campcarCamping.maindata;
  // console.log(data);
  // console.log(id);

  const filteredData = data.filter((value) => value.id === parseInt(id));
  console.log(filteredData);

  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div key={index}>
            <MainDiv>
              <MainContainer>
                <DetailImg>
                  <img src={pic1} alt="picture1" />
                  <img src={pic2} alt="picture2" />
                  <img src={pic3} alt="picture3" className="none2" />
                  <img src={pic2} alt="picture2" className="none" />
                  <img src={pic2} alt="picture2" className="none" />
                  <img src={pic2} alt="picture2" className="none" />
                </DetailImg>
                <SurfyyCon>
                  <CampingCon>
                    <p>{value.camping.name}</p>
                    <LocationCon>
                      <h3>Location</h3>
                      <button>Copy map</button>
                    </LocationCon>
                    <h1></h1>
                  </CampingCon>
                  <KoreaCon>
                    <KoreaDiv>
                      <KoreaMini>
                        <img src={location} alt="location" />
                        <h3>{value.camping.location}</h3>
                      </KoreaMini>
                      <KoreaMini>
                        <img src={clock} alt="clock" />
                        <p>
                          <strong>from </strong>
                          {value.camping.open} <strong>to</strong>{" "}
                          {value.camping.close}
                        </p>
                      </KoreaMini>
                    </KoreaDiv>
                    <KoreaCon2>
                      <KoreaMini className="phoneCon">
                        <img src={phone} alt="phone" />
                        <h3>{value.camping.date}</h3>
                      </KoreaMini>
                      <KoreaMini className="phoneCon">
                        <img src={home} alt="home" />
                        <h3>{value.camping.site}</h3>
                      </KoreaMini>
                    </KoreaCon2>
                  </KoreaCon>
                  <DescripCon>
                    <p>Description</p>
                    <h5>{value.camping.word}</h5>
                    <img src={map} alt="map" />
                  </DescripCon>
                </SurfyyCon>
              </MainContainer>
            </MainDiv>
          </div>
        );
      })}
    </div>
  );
};

export default CampingDetail;
