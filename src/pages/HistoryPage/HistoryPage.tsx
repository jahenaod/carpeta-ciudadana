import React from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/features/NavBar/NavBar";
import { styled } from "styled-components";
import { fetchSportImage } from "../../utils/SportsData";
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
import { HomeIcon } from "../../components/svgs/HomeIcon";
import { HeartIcon } from "../../components/svgs/HeartIcon";
import ThemeToggleButton from "../../components/features/ThemeToggleButton/ThemeToggleButton";
import { HistoryIcon } from "../../components/svgs/HistoryIcon";
import { ArrowIcon } from "../../components/svgs/ArrowIcon";
import { DislikeIcon } from "../../components/svgs/DislikeIcon";
import { useTheme } from "../../styles/themeContext";

export const HistoryPage = () => {
  const { theme } = useTheme();
  const isDarkThemeActive = theme === "dark";
  const [user, setUser] = useState<null | User>(null);
  const [likedSports, setLikedSports] = useState<string[]>([]);
  const [dislikedSports, setDislikedSports] = useState<string[]>([]);
  const [sportsImages, setSportsImages] = useState<{ [sport: string]: string }>(
    {}
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchUserPreferences = async () => {
      if (!user) return;

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setLikedSports(userData.likedSports || []);
          setDislikedSports(userData.dislikedSports || []);
        }
      } catch (error) {
        console.error("Error fetching user preferences:", error);
      }
    };

    fetchUserPreferences();
  }, [user]);

  useEffect(() => {
    const fetchImages = async () => {
      const images: { [sport: string]: string } = {};
      for (const sport of [...likedSports, ...dislikedSports]) {
        const imageUrl = await fetchSportImage(sport);
        images[sport] = imageUrl;
      }
      setSportsImages(images);
    };

    fetchImages();
  }, [likedSports, dislikedSports]);

  return (
    <HistoryWrapper>
      <Link to="/dashboard">
        <ArrowButton>
          <ArrowIcon color={"#fff"} />
        </ArrowButton>
      </Link>
      <HistoryTextWrapper>
        <HistoryTitle>History</HistoryTitle>
        <HistoryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HistoryText>
        <HistoryDate>17 december</HistoryDate>
      </HistoryTextWrapper>
      <HistoryCardsWrapper>
        {likedSports
          .reduce<string[]>((acc, curr, index) => {
            acc.push(curr);
            if (dislikedSports[index]) {
              acc.push(dislikedSports[index]);
            }
            return acc;
          }, [])
          .map((sport, index) => {
            const isLiked = likedSports.includes(sport);
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
                    <DislikeIcon color={"#EA596F"} />
                  ) : (
                    <HeartIcon
                      color={isDarkThemeActive ? "#FFFFFF" : "#1A5BE1"}
                    />
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
