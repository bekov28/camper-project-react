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
