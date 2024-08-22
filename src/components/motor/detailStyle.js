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
  .addToCart:hover {
    background-color: transparent;
    border: 1px solid #fff;
  }

  .compareBtn:hover {
    background: var(--blue, #006dab);
    border: none;
  }
`;
export const CarImageCon = styled.div`
  width: 626px;
  height: 381px;
  flex-shrink: 0;
  display: flex;
`;

export const CarImgLeft = styled.div`
  flex: 1;
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
