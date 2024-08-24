import styled from "styled-components";

export const VmenuUsedCar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  display: flex;

  @media only screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ImgConUsed = styled.div`
  width: 260px;
  img {
    width: 170px;
  }
`;

export const NameWrapperUsed = styled.div`
  width: 955px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 1100px) {
    width: 674px;
  }
  @media only screen and (max-width: 800px) {
    width: 354px;
    height: 295px;
    display: flex;
    flex-direction: column;
  }
`;

export const CarMainConUsed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: space-between;
  width: 100%;

  .NameCar {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .CompanyCar {
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const AlingConUsed = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media only screen and (max-width: 800px) {
  }
`;

export const NameConUsed = styled.div``;
export const RateConUsed = styled.div`
  h3 {
    color: var(--blue, #006dab);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
  .carRate {
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const CarRateUsed = styled.div`
  color: var(--text, #373737);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const ButtonContainerUsed = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  button {
    width: 291.325px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }
  button:hover {
    background-color: #006dab;
    color: white;
  }
  @media only screen and (max-width: 1100px) {
    button {
      width: 150px;
      height: 35px;
      flex-shrink: 0;
    }
    @media only screen and (max-width: 800px) {
      button {
        display: none;
      }
    }
  }
`;

export const LocationDivUsed = styled.div`
  display: none;
  justify-content: space-around;
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;
