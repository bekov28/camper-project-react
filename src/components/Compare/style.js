import styled from "styled-components";
import car from "../../assets/car.svg";

export const CompareBackImg = styled.div`
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

  h3 {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media only screen and (max-width: 900px) {
    p {
      font-size: 60px;
    }
  }
`;
export const CompareCon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CompareModelsMainCon = styled.div`
  margin-top: 80px;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1900px;
  /* width: 1250px; */
`;
export const CompareModelsCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media only screen and (max-width: 900px) {
    p {
      font-size: 30px;
    }
  }
`;
export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 395px;
  height: 742px;
  @media only screen and (max-width: 900px) {
    width: 450px;
    Button {
      width: 450px;
    }
  }
`;
export const CarContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 395px;
  height: 742px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const CarContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 395px;
  height: 742px;
  @media only screen and (max-width: 1330px) {
    display: none;
  }
`;

export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #000;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 20px;
  }
`;
export const ImgConMini = styled.div`
  width: 395px;
  height: 198px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;
export const ModelCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  border-bottom: 1px solid rgba(55, 55, 55, 0.8);
  input {
    width: 100%;
    padding: 10px;
    border: none;
    color: rgba(55, 55, 55, 0.8);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ButtonCon = styled.button`
  width: 395px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  background-color: white;
  color: #006dab;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background-color: #006dab !important;
    color: white;
    cursor: pointer;
  }
`;

export const CarContainerMain = styled.div`
  display: flex;
  gap: 30px;
`;
