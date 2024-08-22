import styled from "styled-components";
import background from "../../assets/motorbackgound.svg";

export const BackgroundCon = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 704px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    width: 509.208px;
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
    background-color: transparent;
    border: 1px solid #fff;
  }

  .addToCart {
    background: var(--blue, #006dab);
    border: none;
  }
  /* .addToCart:hover {
    background-color: transparent;
    border: 1px solid #fff;
  } */

  .compareBtn:hover {
    background: var(--blue, #006dab);
    border: none;
  }
`;
export const CarImageCon = styled.div`
  height: 381px;
  flex-shrink: 0;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarImgLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 626px;
    height: 381px;
    flex-shrink: 0;
    justify-content: center;
  }
`;
export const RightDetail = styled.div`
  flex: 1;
  width: 600px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
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
  flex: 1;
  h3 {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 36px;
  }
`;

export const DetailedCon = styled.div`
  margin-left: 250px;
  flex: 1;
  h3 {
    color: rgba(55, 55, 55, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }
`;
