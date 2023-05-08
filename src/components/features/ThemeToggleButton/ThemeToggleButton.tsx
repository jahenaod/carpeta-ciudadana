import React from "react";
import { useTheme } from "../../../styles/themeContext";
import { StyledThemeToggleButton } from "./ThemeToggleButton.styled";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledThemeToggleButton onClick={handleToggleTheme}>
      {theme === "dark" ? "🌤️" : "🌙"}
    </StyledThemeToggleButton>
  );
};

export default ThemeToggleButton;
