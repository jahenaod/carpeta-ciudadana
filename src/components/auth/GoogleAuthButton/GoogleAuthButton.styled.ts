import { styled } from "styled-components";

export const GoogleButon = styled.button`
  background-color: ${({ theme }) => theme.mode.color1};
  color: ${({ theme }) => theme.mode.text};
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;

  width: 122px;
  height: 66px;

  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  border: none;
`;
