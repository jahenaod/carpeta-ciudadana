import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleButon } from "./GoogleAuthButton.styled";

const GoogleAuthButton: React.FC = () => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
    }
  };

  return <GoogleButon onClick={handleGoogleSignIn}>Google</GoogleButon>;
};

export default GoogleAuthButton;
