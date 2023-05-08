import React from "react";
import Login from "../../components/auth/Login/Login";
import {
  LoginDescription,
  LoginPageHeading,
  LoginPageWrapper,
} from "./LoginPage.styled";
import ThemeToggleButton from "../../components/features/ThemeToggleButton/ThemeToggleButton";

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <ThemeToggleButton />
      <LoginPageHeading>Welcome</LoginPageHeading>
      <LoginDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </LoginDescription>

      <Login />
    </LoginPageWrapper>
  );
};
