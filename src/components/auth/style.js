import styled from "styled-components";

export const MainMainCon = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainCon = styled.div`
  width: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  height: 520px;
  margin: 100px 0px;
  padding: 20px 30px;

  p {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const InputCon = styled.div`
  margin-top: 10px;
  p {
    color: rgba(55, 55, 55, 0.8);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  input {
    width: 434px;
    height: 50px;
    flex-shrink: 0;
    margin-top: 10px;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    padding: 0 15px;
    border: none;
    margin-bottom: 10px;
  }
`;
export const KeepMeCon = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const AlignCon = styled.div`
  display: flex;
  gap: 5px;
  input {
    width: 23px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.15);
  }
  p {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const SingInBtn = styled.button`
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue, #006dab);
  margin-top: 20px;
  color: white;
  color: #fff;
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
`;
export const OrCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 10px;

  p {
    width: 119.017px;
    height: 1px;
    background: rgba(55, 55, 55, 0.15);
  }
  h4 {
    color: #6d6d6d;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
  }
`;

export const IconCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  cursor: pointer;
`;
export const CreateBtn = styled.button`
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006dab);
  margin-top: 10px;
  background: #fff;
  color: var(--blue, #006dab);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const MainRegister = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainRegisterCon = styled.div`
  width: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  height: 520px;
  margin: 100px 0px;
  padding: 20px 30px;
`;

export const RegisterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img {
    cursor: pointer;
  }
`;
