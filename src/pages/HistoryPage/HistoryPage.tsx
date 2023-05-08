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

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

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
