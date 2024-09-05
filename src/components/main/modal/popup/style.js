import styled from "styled-components";

export const Video_ConTainer = styled.div`
  .VideoCon {
    padding-top: 0px;
    text-align: center;
    margin-top: 50px;
    display: grid;
    grid-template-areas: "a a a a" "b b b b";
    border-radius: 8px;
    justify-content: center;

    @media only screen and (max-width: 1300px) {
      grid-template-areas: "a a a" "b b b";
    }

    @media only screen and (max-width: 1050px) {
      grid-template-areas: "a a" "b b";
    }

    @media only screen and (max-width: 730px) {
      grid-template-areas: "a" "b";
    }
  }
`;
