import styled from "styled-components";

export const CarWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  margin-top: 40px;
  gap: 20px;
`;
export const CarOneCon = styled.div`
  width: 223px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 15px;
  .carName {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const BrandConMain = styled.div``;
export const StarCon = styled.div``;
export const CarBtn = styled.div``;
export const Button=styled.button``;
