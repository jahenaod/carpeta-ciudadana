import { styled } from "styled-components";

interface DashboardPageOptionButtonProps {
  active: boolean;
}

export const DashboardPageOptionButton = styled.button<DashboardPageOptionButtonProps>`
  color: ${({ theme }) => theme.mode.color1};
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background-color: ${({ active }) =>
    active ? ({ theme }) => theme.mode.background : "transparent"};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 0;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const DashboardPageBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22rem;
  height: 85px;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.mode.color1};
  border-radius: 24px;
  padding: 0rem 1rem;
`;
