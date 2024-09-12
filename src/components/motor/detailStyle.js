import styled from "styled-components";
import background from "../../assets/motorbackgound.svg";

export const BackgroundCon = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 628px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
    height: 76.407px;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ButtonCon = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;

  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    width: 181.5px;
    height: 50.014px;
    flex-shrink: 0;
    border-radius: 10px;
    cursor: pointer;
  }
  .compareBtn {
    background-color: transparent;
    border: 1px solid #fff;
  }
  .addToCart {
    background-color: transparent;
    border: 1px solid #fff;
  }
  .compareBtn:hover {
    background: var(--blue, #006dab);
  }
  .addToCart:hover {
    background: var(--blue, #006dab);
  }
  .compareBtn2 {
    width: 180px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #006dab;
    background: white;
  }
  .compareBtn2 p {
    color: #006dab;
  }
  .compareBtn2:hover {
    width: 180px;
  }
`;

export const CarImageCon = styled.div`
  width: 100%;
  flex-shrink: 0;
  padding: 20px 40px;
  display: grid;
  grid-template-areas: "a a";
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1450px) {
    display: grid;
    grid-template-areas: "a";
  }

  @media only screen and (max-width: 750px) {
    padding: 10px;
  }
`;

export const CarImgLeft = styled.div`
  display: flex;
  justify-content: right;

  img {
    width: 626px;
    /* height: 381px; */
    flex-shrink: 0;
    justify-content: center;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 520px;
    }
  }
`;
export const RightDetail = styled.div`
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 650px) {
    width: 470px;
  }
`;

export const CarNameCon = styled.div``;

export const RightDetailCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 10px;
  border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  margin: 30px;

  .carNameStyle {
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .costNameStyle {
    color: #006dab;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .locationStyle {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
`;
export const CompanyMainCon = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

export const CompanyCon = styled.div`
  h3 {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 36px;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const DetailedCon = styled.div`
  margin-left: 250px;

  h3 {
    color: rgba(55, 55, 55, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const ComfortCon = styled.div`
  display: grid;
  grid-template-areas: "a a";
  justify-content: center;
  margin-top: 100px;

  @media only screen and (max-width: 1450px) {
    grid-template-areas: "a";
  }
`;

export const ComfortConLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 480px;

  h4 {
    height: 169px;
    flex-shrink: 0;
    color: #373737;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 20px;
  }

  h2 {
    color: var(--text, #373737);
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  button:hover {
    background: var(--blue, #006dab);
    p {
      color: white;
    }

    @media only screen and (max-width: 650px) {
      width: 450px;
    }
  }
`;
export const ComfortConRight = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 1450px) {
    margin-right: 100px;
    display: none;
  }
`;

export const TidyingCon = styled.div`
  display: grid;
  grid-template-areas: "a a";
  justify-content: center;
  margin-top: 50px;
  width: 100%;

  @media only screen and (max-width: 1450px) {
    grid-template-areas: "a";
  }
`;

export const TidyingConLeft = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;

  @media only screen and (max-width: 1450px) {
    display: none;
  }
`;

export const TidyingConRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-left: 80px;
  width: 500px;

  @media only screen and (max-width: 1450px) {
    margin-top: 70px;
    margin-right: 100px;
  }

  @media only screen and (max-width: 650px) {
    width: 450px;
  }

  h4 {
    /* width: 500px; */
    height: 169px;
    flex-shrink: 0;
    color: #373737;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 20px;
  }

  h2 {
    color: var(--text, #373737);
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemReview = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
