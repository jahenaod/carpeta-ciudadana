import React from "react";
import { User } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/features/NavBar/NavBar";
import {
  ArrowButton,
  CardWrapper,
  HistoryCardsWrapper,
  HistoryDate,
  HistoryText,
  HistoryTextWrapper,
  HistoryTitle,
  HistoryWrapper,
  IconContainer,
  ImageContainer,
  SportName,
} from "./HistoryPage.styled";
import { ArrowIcon } from "../../components/svgs/ArrowIcon";
import { HeartIcon } from "../../components/svgs/HeartIcon";
import { DislikeIcon } from "../../components/svgs/DislikeIcon";
import { useTheme } from "../../styles/themeContext";
import useFetchImages from "../../utils/useFetchImages";
import useFetchUser from "../../utils/useFetchUser";
import shuffleArray from "../../utils/shuffleArray";

export const HistoryPage = () => {
  const { theme } = useTheme();
  const isDarkThemeActive = theme === "dark";
  const [user, setUser] = useState<null | User>(null);
  const { likedSports, dislikedSports } = useFetchUser(user, setUser);
  const sportsImages = useFetchImages(likedSports, dislikedSports);

  const combinedSports = [
    ...likedSports.map((sport) => ({ sport, isLiked: true })),
    ...dislikedSports.map((sport) => ({ sport, isLiked: false })),
  ];

  shuffleArray(combinedSports);

  return (
    <HistoryWrapper>
      <Link to="/dashboard">
        <ArrowButton>
          <ArrowIcon color={"#fff"} />
        </ArrowButton>
      </Link>
      <HistoryTextWrapper>
        <HistoryTitle>History</HistoryTitle>{" "}
        <HistoryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HistoryText>
        <HistoryDate>17 december</HistoryDate>
      </HistoryTextWrapper>
      <HistoryCardsWrapper>
        {combinedSports.map((item, index) => {
          const { sport, isLiked } = item;
          return (
            <CardWrapper
              key={`${isLiked ? "liked" : "disliked"}-${sport}-${index}`}
            >
              <ImageContainer
                style={{
                  backgroundImage: `url(${sportsImages[sport] || ""})`,
                }}
              >
                <SportName>{sport}</SportName>
              </ImageContainer>

              <IconContainer>
                {isLiked ? (
                  <HeartIcon
                    color={isDarkThemeActive ? "#FFFFFF" : "#1A5BE1"}
                  />
                ) : (
                  <DislikeIcon color={"#EA596F"} />
                )}
              </IconContainer>
            </CardWrapper>
          );
        })}
      </HistoryCardsWrapper>

      <NavBar />
    </HistoryWrapper>
  );
};
