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
    /* background-color: transparent;
    border: 1px solid #fff; */
    cursor: pointer;
  }
  .compareBtn {
    background-color: transparent;
    border: 1px solid #fff;
  }
  .addToCart {
    background: var(--blue, #006dab);
    border: none;
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
  display: flex;
  justify-content: right;
  img {
    width: 626px;
    height: 381px;
    flex-shrink: 0;
    justify-content: center;
  }
`;
export const RightDetail = styled.div`
  width: 600px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const ComfortCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const ComfortConLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  h4 {
    width: 500px;
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
export const ComfortConRight = styled.div`
  display: flex;
  width: 550px;
  height: 477px;
  flex-shrink: 0;
`;

export const TidyingCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const TidyingConLeft = styled.div`
  display: flex;
  width: 550px;
  height: 477px;
  flex-shrink: 0;
  margin-right: 40px;
`;
export const TidyingConRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  margin-left: 150px;

  h4 {
    width: 500px;
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
