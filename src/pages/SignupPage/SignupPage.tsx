import React from "react";
import Signup from "../../components/auth/Signup/Signup";
import {
  SignupDescription,
  SignupPageHeading,
  SignupPageWrapper,
} from "./SignupPage.styled";
import ThemeToggleButton from "../../components/features/ThemeToggleButton/ThemeToggleButton";

export const SignupPage = () => {
  return (
    <SignupPageWrapper>
      <ThemeToggleButton />
      <SignupPageHeading>Welcome</SignupPageHeading>
      <SignupDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SignupDescription>
      <Signup />
    </SignupPageWrapper>
  );
};
