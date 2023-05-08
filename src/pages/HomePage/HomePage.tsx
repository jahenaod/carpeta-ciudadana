import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  Heading,
  HomePageWrapper,
} from "./HomePage.styled";
import ThemeToggleButton from "../../components/features/ThemeToggleButton/ThemeToggleButton";

export const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <ThemeToggleButton />
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
