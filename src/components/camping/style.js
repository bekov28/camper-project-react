import styled from "styled-components";
import campingImg from "../camping/assets/background.svg";

export const BackgroundCamping = styled.div`
  width: 100%;
  height: 500px;
  flex-shrink: 0;
  background-image: url(${campingImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 5px;
  .back-h4 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .back-h1 {
    color: #fff;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const MainCon = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-areas: "a a a";
  padding: 0 50px;
  justify-content: center;
  gap: 50px;
  cursor: pointer;
  @media only screen and (max-width: 1350px) {
    display: grid;
    grid-template-areas: "a a";
  }
  @media only screen and (max-width: 950px) {
    display: grid;
    grid-template-areas: "a";
  }
`;
export const ImgCon = styled.div`
  h5 {
    color: var(--text, #373737);
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 15px;
  }
  h6 {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
  }
`;

// CampingDetails
export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1300px;
`;

export const DetailImg = styled.div`
  gap: 25px;
  display: grid;
  grid-template-areas: "a a a a a a";
  justify-content: center;

  @media only screen and (max-width: 1350px) {
    grid-template-areas: "a a a";
    gap: 100px;
    .none {
      display: none;
    }
  }

  @media only screen and (max-width: 820px) {
    grid-template-areas: "a a";
    gap: 50px;
    .none2 {
      display: none;
    }
  }
  img {
    width: 194px;
    height: 147px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
`;

export const SurfyyCon = styled.div`
  @media only screen and (max-width: 1350px) {
    width: 1100px;
    padding-left: 20px;
  }
  @media only screen and (max-width: 1140px) {
    width: 900px;
  }
  @media only screen and (max-width: 950px) {
    width: 600px;
  }
`;

export const CampingCon = styled.div`
  margin-top: 20px;
  p {
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h1 {
    width: 1300px;
    height: 1px;
    background: rgba(55, 55, 55, 0.2);
    margin-top: 15px;
  }
`;
export const LocationCon = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  button {
    width: 120px;
    height: 25px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--sariq, #ff7a00);
    color: var(--sariq, #ff7a00);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: white;
    cursor: pointer;
  }

  h3 {
    color: var(--blue, #006dab);
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
  }
`;
export const KoreaCon = styled.div`
  margin-top: 15px;
  p strong {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h3 {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .phoneCon {
    margin-top: 10px;
  }
`;
export const KoreaDiv = styled.div`
  display: flex;
  gap: 100px;
`;
export const KoreaMini = styled.div`
  display: flex;
  gap: 5px;
  p {
    color: var(--sariq, #ff7a00);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 140px;
  }
`;
export const KoreaCon2 = styled.div`
  display: flex;
  gap: 90px;
  h3 {
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;
export const DescripCon = styled.div`
  margin-top: 15px;
  p {
    color: var(--blue, #006dab);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h5 {
    margin-top: 10px;
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    margin-top: 50px;
    width: 100%;
    cursor: pointer;
  }
`;
