import React from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { NoPage } from "../pages/NoPage/NoPage";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { useTheme } from "../styles/themeContext";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.mode.background};
    color: ${({ theme }) => theme.mode.text};
  }
`;

const darkTheme = {
  mode: {
    background: "#181828",
    text: "#ffffff",
    text2: "#FEFEFE",
    color1: "#2C2B3E",
    color2: "#1F1F31",
    color3: "#ffffff",
    color4: "#EA596F",
  },
};

const lightTheme = {
  mode: {
    background: "#F3F3F3",
    text: "#161617",
    text2: "#232232",
    color1: "#FFFFFF",
    color2: "#F3F3F3",
    color3: "#2067F8",
    color4: "#EA596F",
  },
};

function App() {
  const { theme } = useTheme();
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <StyledThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StyledThemeProvider>
  );
}

export default App;
