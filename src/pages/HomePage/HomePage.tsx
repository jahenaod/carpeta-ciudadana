import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  Heading,
  HomePageWrapper,
} from "./HomePage.styled";

export const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <Heading>HomePage</Heading>
      <ButtonWrapper>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </ButtonWrapper>
    </HomePageWrapper>
  );
};
