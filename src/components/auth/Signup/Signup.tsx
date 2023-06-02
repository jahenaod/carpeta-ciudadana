import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import axios from 'axios';
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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");

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
      const validateResponse = await fetch(
        `http://169.51.195.62:30174/apis/validateCitizen/${nationalId}`
      );

      if (validateResponse.status === 204) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, {
          email: email,
        });

        // Prepare data to be sent to the API
        const data = {
          "id": nationalId,
          "name": name,
          "address": address,
          "email": email,
          "operatorId": 10003,
          "operatorName": "Operador Ciudadano"
        };

        // Make the API request
        /*
        const response = await fetch(
          "http://169.51.195.62:30174/apis/registerCitizen",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
          */
         const response = await axios.post("http://169.51.195.62:30174/apis/registerCitizen/", data);
        console.log(response);

        if (response.status == 201) {
          // Redirect to the login if registration and API request are successful
          window.location.href = "/Login";
        } else {
          throw new Error("Registration failed.");
        }
      } else if (validateResponse.status === 200) {
        throw new Error("Usuario ya registrado");
      } else {
        throw new Error("Failed to validate user.");
      }
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
        <InputWrapper>
          <PseudoLabel>Name</PseudoLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <PseudoLabel>Address</PseudoLabel>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <PseudoLabel>National ID</PseudoLabel>
          <Input
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </InputWrapper>
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
