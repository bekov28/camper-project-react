import styled from "styled-components";
import caravanImg from "../../assets/caravan-back.svg";

export const BackgroundCar = styled.div`
  width: 100%;
  height: 500px;
  flex-shrink: 0;
  background-image: url(${caravanImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 5px;
  .back-h3 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .back-h2 {
    color: #fff;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .back-h1 {
    color: #fff;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -10px;
  }
`;

export const CaravanCon = styled.div`
  width: 240px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 15px 25px;

  img {
    height: 110px;
    margin-left: -15px;
  }
  h3 {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h4 {
    margin-top: 18px;
    color: var(--blue, #006dab);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const BrandConMainCaravan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 15px;
  }
  p {
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
