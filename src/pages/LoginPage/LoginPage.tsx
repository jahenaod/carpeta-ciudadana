import React from "react";
import Login from "../../components/auth/Login/Login";
import {
  LoginDescription,
  LoginPageHeading,
  LoginPageWrapper,
} from "./LoginPage.styled";


export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginPageHeading>Welcome</LoginPageHeading>
      <LoginDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </LoginDescription>
      <Login />
    </LoginPageWrapper>
  );
};
