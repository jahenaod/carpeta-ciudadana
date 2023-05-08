import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";

import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  ErrorMessage,
  ForgotPassword,
  Input,
  InputWrapper,
  LoginForm,
  LoginWraper,
  PseudoLabel,
  SubmitButton,
} from "./Login.styled";
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  const validateForm = () => {
    const emailIsValid = email.includes("@") && email.includes(".");
    setEmailValid(emailIsValid);

    const passwordIsValid = password.length >= 6;
    setPasswordValid(passwordIsValid);

    return emailIsValid && passwordIsValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <LoginWraper>
      <LoginForm onSubmit={handleSubmit}>
        <InputWrapper>
          <PseudoLabel>Email</PseudoLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        {!emailValid && <p>Email is invalid.</p>}
        <InputWrapper>
          <PseudoLabel>Password</PseudoLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        {!passwordValid && <p>Password must be at least 6 characters.</p>}
        <ForgotPassword>Forgot your password?</ForgotPassword>
        <ButtonContainer>
          <SubmitButton type="submit">Login</SubmitButton>
          <GoogleAuthButton />
        </ButtonContainer>
      </LoginForm>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginWraper>
  );
};

export default Login;
