import React, { useState } from "react";
import {
  AlignCon,
  CreateBtn,
  DemoCon,
  IconCon,
  InputCon,
  KeepMe,
  KeepMeCon,
  MainCon,
  MainMainCon,
  OrCon,
  SingInBtn,
} from "./style";

import group from "../auth/icons/group.svg";
import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  const [invalidAttempt, setInvalidAttempt] = useState(false);
  const handleInvalidClick = (event) => {
    event.preventDefault();
    setInvalidAttempt(true);
    setTimeout(() => setInvalidAttempt(false), 3000);
  };

  return (
    <MainMainCon>
      <DemoCon>
        <h3>For demo use: </h3>
        <p>Email: no email</p>
        <p>Password: no password</p>
      </DemoCon>
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
          <NavLink to={"#"} onClick={handleInvalidClick}>
            <img src={group} />
          </NavLink>
        </IconCon>
        {invalidAttempt && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            Invalid Attempt
          </p>
        )}
        <NavLink to={"/register"}>
          <CreateBtn>CREATE ACCOUNT</CreateBtn>
        </NavLink>
      </MainCon>
    </MainMainCon>
  );
};

export default LoginComponent;
