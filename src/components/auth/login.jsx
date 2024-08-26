import React from "react";
import {
  AlignCon,
  CreateBtn,
  IconCon,
  InputCon,
  KeepMe,
  KeepMeCon,
  MainCon,
  MainMainCon,
  OrCon,
  SingInBtn,
} from "./style";
import { Naver } from "../styles/style";
import naver from "../auth/icons/naver.svg";
import group from "../auth/icons/group.svg";
import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  return (
    <MainMainCon>
      <MainCon>
        <h2>Sign in</h2>
        <InputCon>
          <p>Email</p>
          <input type="text" placeholder="Your email" />
          <p>Password</p>
          <input type="text" placeholder="Your password" />
        </InputCon>
        <KeepMeCon>
          <AlignCon>
            {" "}
            <input type="checkbox" />
            <p>Keep me logged in</p>
          </AlignCon>
          <a href="#">Forget your password ?</a>
        </KeepMeCon>
        <NavLink to={"/motor"}>
          <SingInBtn>SIGN IN</SingInBtn>
        </NavLink>
        <OrCon>
          <p></p>
          <h4>OR</h4>
          <p></p>
        </OrCon>
        <IconCon>
          {/* <div className="Naver">
            <img src={naver} />
          </div>
          <div className="Google"></div>
          <div className="Kakao"></div> */}
          <img src={group} />
        </IconCon>
        <NavLink to={"/register"}>
          <CreateBtn>CREATE ACCOUNT</CreateBtn>
        </NavLink>
      </MainCon>
    </MainMainCon>
  );
};

export default LoginComponent;
