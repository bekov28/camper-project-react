import React from "react";
import { BackgroundCamping, ImgCon, MainCon } from "./style";
import img1 from "../camping/assets/img-1.svg";
import img2 from "../camping/assets/img-2.svg";
import img3 from "../camping/assets/img-3.svg";
import { Link } from "react-router-dom";
import { campcarCamping } from "../mock/mockdatacamping";

const CampingPlaceComponent = () => {
  const data = campcarCamping.maindata;
  // console.log(data);

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
              <Link to={`/camping/${value.id}`}>
                <MainCon>
                  <ImgCon>
                    <img src={img1} alt="img-1" />
                    <h5>Surfyy Beach Camping</h5>
                    <h6>Yangyang-gun</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img2} alt="img-2" />
                    <h5>Nanji Camp</h5>
                    <h6>Sangam-dong</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img3} alt="img-3" />
                    <h5> Jeju Starlight Glamping</h5>
                    <h6>Jeju-do</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img1} alt="img-1" />
                    <h5>Surfyy Beach Camping</h5>
                    <h6>Yangyang-gun</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img2} alt="img-2" />
                    <h5>Nanji Camp</h5>
                    <h6>Sangam-dong</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img3} alt="img-3" />
                    <h5> Jeju Starlight Glamping</h5>
                    <h6>Jeju-do</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img1} alt="img-1" />
                    <h5>Surfyy Beach Camping</h5>
                    <h6>Yangyang-gun</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img2} alt="img-2" />
                    <h5>Nanji Camp</h5>
                    <h6>Sangam-dong</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img3} alt="img-3" />
                    <h5> Jeju Starlight Glamping</h5>
                    <h6>Jeju-do</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img1} alt="img-1" />
                    <h5>Surfyy Beach Camping</h5>
                    <h6>Yangyang-gun</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img2} alt="img-2" />
                    <h5>Nanji Camp</h5>
                    <h6>Sangam-dong</h6>
                  </ImgCon>
                  <ImgCon>
                    <img src={img3} alt="img-3" />
                    <h5> Jeju Starlight Glamping</h5>
                    <h6>Jeju-do</h6>
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
