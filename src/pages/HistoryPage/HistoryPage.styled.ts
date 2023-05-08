import styled from "styled-components";
import { Link } from "react-router-dom";

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  background-color: ${({ theme }) => theme.mode.background};
  color: ${({ theme }) => theme.mode.text};
  padding: 0rem 3rem 2rem 3rem;
  padding-bottom: 8rem;
`;
export const HistoryCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  left: 2.7rem;
  top: 1rem;
`;

export const HistoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HistoryTitle = styled.h1`
  font-weight: 700;
  font-size: 42px;
  line-height: 122.02%;
  letter-spacing: -0.055em;
  color: ${({ theme }) => theme.mode.text};
  padding-top: 4.4rem;
  padding-bottom: 0;
  margin: 0;
`;
export const HistoryText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 148.02%;
  color: ${({ theme }) => theme.mode.text2};
  opacity: 0.8;
  margin: 0.5rem 0;
`;
export const HistoryDate = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 148.02%;
  color: ${({ theme }) => theme.mode.text2};
  opacity: 0.8;
  margin: 0.2rem 0 1rem 0;
`;

export const CardWrapper = styled.div`
  width: 326px;
  height: 77px;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.mode.color1};
  display: flex;
  font-size: 24px;
  color: #fff;
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 1.2rem;
`;

export const IconContainer = styled.div`
  width: 20%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SportName = styled.div`
  position: absolute;
  margin-top: 1.4rem;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 122.02%;
  letter-spacing: -0.045em;

  color: #fefefe;
`;
