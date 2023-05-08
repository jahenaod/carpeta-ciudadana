import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  ButtonContainer,
  ErrorMessage,
  Input,
  SignupForm,
  SignupWraper,
  SubmitButton,
} from "./Signup.styled";
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton";
import { InputWrapper, PseudoLabel } from "../Login/Login.styled";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const validateForm = () => {
    const emailIsValid = email.includes("@") && email.includes(".");
    setEmailValid(emailIsValid);

    const passwordIsValid = password.length >= 6;
    setPasswordValid(passwordIsValid);

    const confirmPasswordIsValid = password === confirmPassword;
    setConfirmPasswordValid(confirmPasswordIsValid);

    return emailIsValid && passwordIsValid && confirmPasswordIsValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: email,
        likedSports: [],
        dislikedSports: [],
      });

      window.location.href = "/dashboard";
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <SignupWraper>
      <h2>Sign up</h2>
      <SignupForm onSubmit={handleSubmit}>
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
        <InputWrapper>
          <PseudoLabel>Confirm Password</PseudoLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputWrapper>
        {!confirmPasswordValid && <p>Passwords do not match.</p>}
        <ButtonContainer>
          <SubmitButton type="submit">Sign up</SubmitButton>
          <GoogleAuthButton />
        </ButtonContainer>
      </SignupForm>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SignupWraper>
  );
};

export default Signup;
