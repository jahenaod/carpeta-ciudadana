// src/pages/DashboardPage/DashboardPage.styled.ts
import styled from "styled-components";

// Add this new style for the ThemeToggleButton
export const StyledThemeToggleButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 0.8rem;
  border: none;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.mode.color1};
  font-size: 1.3rem;
`;
