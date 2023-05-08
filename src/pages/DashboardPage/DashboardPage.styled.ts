import styled from "styled-components";

export const DashboardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 4rem;
  background-color: ${({ theme }) => theme.mode.background};
  transition: all 0.2s ease-in-out;
`;

export const DashboardLikeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const DashboardPageLikeButton = styled.button`
  border-radius: 5rem;
  border: none;
  width: 5.1rem;
  height: 5.1rem;
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const DashboardPageDisikeButton = styled.button`
  border-radius: 5rem;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.mode.color1};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 0rem 0rem 1.2rem 1.2rem;
`;

export const SportImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const SportName = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: transparent;
  color: white;
  padding: 10px;
  margin: 0;
  padding: 1.2rem;
  font-weight: 700;
  font-size: 34px;
  line-height: 122.02%;
`;
