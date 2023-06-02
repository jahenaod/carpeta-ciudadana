import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.mode.background};
  transition: all 0.2s ease-in-out;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.mode.text};
  transition: all 0.2s ease-in-out;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  padding: 22px 38px;
  gap: 10px;

  width: 122px;
  height: 66px;

  border: none;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;
`;
