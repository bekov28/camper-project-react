import styled from "styled-components";

export const CustomCon = styled.div`
  margin-left: 20px;
`;
export const MainCon = styled.div`
  .PElement {
    border-bottom: 1px solid rgba(55, 55, 55, 0.15);
    margin-top: 20px;
  }
`;

export const PremiumCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  /* border: 4px solid blue; */
  width: 100%;

  p strong {
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const MainCarCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;

export const CarContainer = styled.div`
  display: flex;
  width: 200px;
`;

export const CarBrand = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -100px;

  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h3 {
    color: rgba(55, 55, 55, 0.8);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
  }
  h4 {
    color: #373737;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 20px;
  }
`;
export const IdCon = styled.div`
  margin-right: 80px;
  p {
    color: rgba(55, 55, 55, 0.7);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p strong {
    color: #373737;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

// Q&A Section

export const QuestionCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 1220px) {
    flex-direction: column;
  }
`;

export const QuestionConLeft = styled.div`
  margin-right: 70px;
  flex: 1;

  @media only screen and (max-width: 1220px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const QuestionConright = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;
  flex-shrink: 0;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.1);
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;

  p {
    color: var(--text-color, #023047);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  input,
  textarea {
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
    color: rgba(55, 55, 55, 0.7);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    border: none;
    background-color: #f5f5f5;
  }

  textarea {
    height: 120px;
  }

  @media only screen and (max-width: 1220px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const SendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .SendBtn:hover {
    background-color: #0e90db;
    color: #fff;
  }
  .SendBtn {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    background-color: #006dab;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  @media only screen and (max-width: 1220px) {
    width: 100%;
  }
`;

// Contact Section
export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }

  @media only screen and (max-width: 1220px) {
    width: 100%;
  }
  @media only screen and (max-width: 700px) {
    img {
      width: 100%;
    }
  }
`;
export const PhoneCon = styled.div`
  width: 295px;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;

  @media only screen and (max-width: 1220px) {
    width: 250px;
  }
`;
export const EmailCon = styled.div`
  width: 295px;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;

  @media only screen and (max-width: 1220px) {
    width: 250px;
  }
`;
export const PhoneEmailCon = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 20px;

  p {
    color: #666;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
  h3 {
    color: var(--txt-color, #1e1c1c);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 130%; /* 23.4px */
  }
  @media only screen and (max-width: 1220px) {
    justify-content: center;
    /* width: 100%; */
  }
`;
