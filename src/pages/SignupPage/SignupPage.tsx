import React from "react";
import Signup from "../../components/auth/Signup/Signup";
import {
  SignupDescription,
  SignupPageHeading,
  SignupPageWrapper,
} from "./SignupPage.styled";

export const SignupPage = () => {
  return (
    <SignupPageWrapper>
      <SignupPageHeading>Welcome</SignupPageHeading>
      <SignupDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SignupDescription>
      <Signup />
    </SignupPageWrapper>
  );
};
