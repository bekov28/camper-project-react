import { Link } from "react-router-dom";
import styled from "styled-components";
import car from "../../assets/car.svg";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;
export const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .menu-icon {
    display: none;
  }

  @media only screen and (max-width: 1350px) {
    .menu-icon {
      display: flex;
    }
  }
  @media only screen and (max-width: 850px) {
    .menu-icon {
      display: none;
    }
  }
`;

export const Logo = styled.img``;
export const Arrow = styled.img``;

export const MenuWrapper = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-evenly;
  cursor: pointer;

  .menuWrappermini {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .menuWrappermini p {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Montserrat;
  }
  .menuWrappermini:hover {
    background-color: rgba(0, 109, 171, 0.05);
    color: white;
    border-radius: 20px;
    height: 25px;
  }

  @media only screen and (max-width: 1350px) {
    .menuWrappermini {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  .menu-icon {
    display: none;
  }
  .CartImg:hover {
    width: 31px;
  }
  .ManImg:hover {
    width: 31px;
  }
`;

export const Cart = styled.img``;

export const Man = styled.img``;
export const Menu = styled.img``;

export const Enlang = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .en-lang {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media only screen and (max-width: 1350px) {
    .en-lang {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

// Background--img-section

export const BackgroundImg = styled.div`
  width: 100%;
  height: 500px;
  flex-shrink: 0;
  background-image: url(${car});
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

// Not Found Component

export const NotFound = styled.img`
  width: 100vw;
  margin-top: 100px;
`;

export const MainBodyCon = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
`;

export const SideBarCon = styled.div`
  display: flex;
  height: 1279.762px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 70px;
  cursor: pointer;

  @media only screen and (max-width: 1350px) {
    display: none;
  }
`;

export const CostOfCar = styled.div`
  padding-top: 15px;
  .h3-style {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    width: 240px;
    height: 33px;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
  h4 {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  input {
    width: 91px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.6);
    background-color: white;
    margin-top: 2px;
  }
  .FromTwoCon {
    display: flex;
    gap: 25px;
    margin-top: 20px;
  }
  .CostInput {
    padding: 5px;
  }
`;

export const BrandCon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .brand-arrow-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 33px;
    border: none;
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
  .h3-style {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    width: 240px;
    height: 33px;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .brand-mini {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .aidal-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .checkbox {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
  }
  .brand-mini p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;
export const CompanyCon = styled.div`
  flex: 1;
  margin-top: 30px;

  .brand-mini {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .brand-arrow-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 33px;
    border: none;
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
  .h3-style {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    width: 240px;
    height: 33px;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .aidal-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .checkbox {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
  }
`;
export const LicenseCon = styled.div`
  flex: 1;
  margin-top: 30px;

  .brand-arrow-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 33px;
    border: none;
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
  .brand-mini {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .aidal-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .checkbox {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
  }

  .brand-mini p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  .h3-style {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    width: 240px;
    height: 33px;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
`;

export const NumberCon = styled.div`
  flex: 1;
  margin-top: 30px;

  .brand-arrow-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 33px;
    border: none;
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
  .brand-mini {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .aidal-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .checkbox {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
  }

  .brand-mini p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  .h3-style {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    width: 240px;
    height: 33px;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
`;
export const LocationCon = styled.div`
  flex: 1;
  margin-top: 30px;

  .brand-arrow-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 33px;
    border: none;
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
  .brand-mini {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .aidal-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .checkbox {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
  }

  .brand-mini p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  .h3-style {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    width: 240px;
    height: 33px;
    border: none;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
`;
export const ButtonCon = styled.div`
  margin-top: 30px;
  .yellow-btn {
    width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--sariq, #ff7a00);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border: none;
    color: #fff;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    margin-right: 10px;
  }

  .blue-btn {
    width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
  .yellow-btn:hover {
    background-color: blue;
  }
  .blue-btn:hover {
    background-color: blue;
  }
`;
export const CompareCon = styled.div`
  margin-top: 50px;

  p {
    color: var(--blue, #006dab);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .car-img-con {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const MainItemCon = styled.div`
  /* flex: 4; */
  margin-left: 10px;
  /* display: grid;
  grid-template-areas: ("a a a a"); */
  @media only screen and (max-width: 1350px) {
    width: 80vw;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(55, 55, 55, 0.5);
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 700px) {
    border-bottom: none;
  }
`;

export const ItemFirstCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 850px) {
    display: flex;
    justify-content: space-between;
    gap: 70px;
  }
  @media only screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    gap: 70px;
  }
`;

export const ItemCon = styled.div`
  flex: 1;
  padding: 2px 5px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  p {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }
  strong {
    color: var(--blue, #006dab);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }

  @media only screen and (max-width: 700px) {
    margin-left: 1rem;
    display: flex;
    justify-content: right;
    p {
      display: flex;
    }
  }
`;

export const SortConRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 10px;

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: right;
    margin-left: 3rem;
  }
`;

export const SortCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 2px 5px;

  p {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 100%;
    width: 60px;
  }
  @media only screen and (max-width: 700px) {
    p {
      display: none;
    }
  }
`;

export const SelectCon = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  display: flex;
  justify-content: space-between;
  width: 227px;
  height: 30px;
  flex-shrink: 0;

  input {
    border: none;
    padding: 0 5px;
    color: rgba(55, 55, 55, 0.6);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    width: 227px;
  }
  img {
    border-left: 1px solid rgba(55, 55, 55, 0.3);
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    padding: 5px;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const SixtyCon = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(55, 55, 55, 0.3);
  border-radius: 5px;
  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-left: 1px solid rgba(55, 55, 55, 0.3);
    padding: 5px;
  }
  input {
    width: 50px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    padding: 0 5px;
    text-align: center;
    color: rgba(55, 55, 55, 0.6);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const TwoIconCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 80px;
  padding: 5px;
  button {
    padding: 4px 7px;
    height: 30px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  .GridStyle {
    border-radius: 5px 0px 0px 5px;
  }
  .RoundStyle {
    border-radius: 0px 5px 5px 0px;
  }
`;

export const NoShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2px 5px;
  margin-top: 20px;
  display: none;
  /* gap: 60px; */
  margin-left: 30px;
  p {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    width: 60px;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    width: 100%;
  }
`;
export const SelectCon2 = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  display: flex;
  justify-content: space-between;
  width: 227px;
  height: 30px;
  flex-shrink: 0;
  input {
    border: none;
    padding: 0 5px;
    color: rgba(55, 55, 55, 0.6);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  img {
    border-left: 1px solid rgba(55, 55, 55, 0.3);
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    padding: 5px;
  }
`;

export const SixtyCon2 = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(55, 55, 55, 0.3);
  border-radius: 5px;
  margin-left: 20px;
  input {
    width: 50px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    padding: 0 5px;
    text-align: center;
    color: rgba(55, 55, 55, 0.6);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-left: 1px solid rgba(55, 55, 55, 0.3);
    padding: 5px;
  }
`;
export const CarWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  margin-top: 40px;
  gap: 20px;

  @media only screen and (max-width: 1350px) {
    display: grid;
    grid-template-areas: " a a a";
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 850px) {
    display: grid;
    grid-template-areas: " a a";
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-areas: "a";
  }
`;

export const CarOneCon = styled.div`
  width: 240px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 15px;

  img {
    height: 137px;
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
  .car-4-img,
  .car-3-img {
    width: 215px;
    padding-left: 5px;
  }

  @media only screen and (max-width: 1350px) {
  }
`;

export const BrandConMain = styled.div`
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

export const StarCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  p {
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  /* @media only screen and (max-width: 1350px) {
    display: none;
  } */
`;

export const CarBtn = styled.div`
  display: flex;
  gap: 7px;

  button {
    width: 94px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    background: #fff;
    margin-top: 13px;
    cursor: pointer;
  }
  button:hover {
    background-color: #006dab;
    color: white;
  }

  button.view-detail-btn {
    justify-content: center;
    align-items: center;
    display: none;
  }

  @media only screen and (max-width: 1350px) {
    display: flex;
    gap: 5px;

    button.order-blue {
      border-radius: 10px;
      background: var(--blue, #006dab);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      font-family: "Open Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    button.compare-btn {
      display: none;
    }
    button.view-detail-btn {
      display: flex;
    }
  }

  @media only screen and (max-width: 850px) {
    button.order-blue {
      border-radius: 10px;
      background: var(--blue, #006dab);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      font-family: "Open Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const Button = styled.button`
  width: 94px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: var(--blue, #006dab);
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  background: #fff;
  margin-top: 13px;
  cursor: pointer;
`;

// Footer Section
export const MainFooterCon = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  flex-shrink: 0;
  background: var(--blue, #006dab);
  margin-top: 60px;
  padding: 50px 71px;
  .logo-icon {
    width: 92.128px;
    color: #fff;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: none;
  }
`;

export const CamperConTwo = styled.div`
  flex: 1;
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  .logo-icon {
    width: 92.128px;
    color: #fff;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: none;
  }
  p {
    color: white;
  }

  @media only screen and (max-width: 1350px) {
    p {
      display: none;
    }
    .logo-icon {
      display: flex;
    }
  }
`;

export const ServicesCon = styled.div`
  flex: 1;
  cursor: pointer;
  .h3-footer {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }

  @media only screen and (max-width: 1350px) {
    display: none;
  }
`;

export const MenuCon = styled.div`
  flex: 1;
  cursor: pointer;
  .h3-footer {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
  @media only screen and (max-width: 1350px) {
    display: none;
  }
`;

export const ContactCon = styled.div`
  flex: 1;
  .h3-footer {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }

  @media only screen and (max-width: 1350px) {
    p,
    h3 {
      display: none;
    }
  }
`;

export const ContactImgCon = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  @media only screen and (max-width: 1350px) {
    display: flex;
    justify-content: right;
    margin-top: -30px;
  }
`;

export const Youtube = styled.img``;
export const Instagram = styled.img``;
export const Naver = styled.img``;
