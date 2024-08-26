import React from "react";
import {
  AlignCon,
  InputCon,
  MainRegister,
  MainRegisterCon,
  RegisterDiv,
  SingInBtn,
} from "./style";
import XImage from "../auth/icons/x.svg";
import { NavLink } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <MainRegister>
      <MainRegisterCon>
        <RegisterDiv>
          <p>Sign Up</p>
          <img src={XImage} />
        </RegisterDiv>
        <InputCon>
          <p>Email</p>
          <input type="text" placeholder="Your email" />
          <p>Password</p>
          <input type="password" placeholder="Your password" />
          <p>Repeat your password</p>
          <input type="password" placeholder="Your password" />
        </InputCon>
        <AlignCon>
          {" "}
          <input type="checkbox" />
          <p>Keep me logged in</p>
        </AlignCon>
        <NavLink to={"/login"}>
          <SingInBtn>SIGN UP</SingInBtn>
        </NavLink>
      </MainRegisterCon>
    </MainRegister>
  );
};

export default RegisterComponent;
