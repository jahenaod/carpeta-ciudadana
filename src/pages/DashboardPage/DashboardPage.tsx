import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/features/NavBar/NavBar";
import {
  DashboardLikeSection,
  DashboardPageDisikeButton,
  DashboardPageLikeButton,
  DashboardPageWrapper,
  ImageWrapper,
  SportImage,
  SportName,
} from "./DashboardPage.styled";
import { auth, db } from "../../services/firebase";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { User, onAuthStateChanged } from "firebase/auth";
import { DislikeIcon } from "../../components/svgs/DislikeIcon";
import { HeartIcon } from "../../components/svgs/HeartIcon";
import { fetchSportImage, fetchSportsData } from "../../utils/SportsData";
import ThemeToggleButton from "../../components/features/ThemeToggleButton/ThemeToggleButton";
import { useTheme } from "../../styles/themeContext";

// Import the refactored functions

interface League {
  strSport: string;
}

export const DashboardPage = () => {
  const { theme } = useTheme();
  const isDarkThemeActive = theme === "dark";
  const [sport, setSport] = useState<string>("");
  const [sportImage, setSportImage] = useState<string>("");
  const [likedSports, setLikedSports] = useState<string[]>([]);
  const [dislikedSports, setDislikedSports] = useState<string[]>([]);
  const [sports, setSports] = useState<string[]>([]);
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const uniqueSports = await fetchSportsData();
      setSports(uniqueSports);
      setSport(uniqueSports[Math.floor(Math.random() * uniqueSports.length)]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true while fetching the image
      const image = await fetchSportImage(sport);
      setSportImage(image);
      setLoading(false); // Set loading state to false after the image is fetched
    };

    fetchData();
  }, [sport]);

  const handleSportChange = async (liked: boolean) => {
    if (liked) {
      setLikedSports([...likedSports, sport]);
    } else {
      setDislikedSports([...dislikedSports, sport]);
    }

    if (user) {
      const userDocRef = doc(db, "users", user.uid);

      try {
        // Get the user document from Firestore
        const userDoc = await getDoc(userDocRef);

        // If the document doesn't exist, create a new one
        if (!userDoc.exists()) {
          await setDoc(userDocRef, {
            likedSports: liked ? [sport] : [],
            dislikedSports: !liked ? [sport] : [],
          });
        } else {
          // Otherwise, update the existing document
          const data = userDoc.data();
          const newLikedSports = liked
            ? [...data.likedSports, sport]
            : data.likedSports;
          const newDislikedSports = !liked
            ? [...data.dislikedSports, sport]
            : data.dislikedSports;

          await updateDoc(userDocRef, {
            likedSports: newLikedSports,
            dislikedSports: newDislikedSports,
          });
        }

        // Add the liked or disliked sport to a new collection along with the image URL
        const sportCollectionRef = collection(db, "users", user.uid, "sports");
        await addDoc(sportCollectionRef, {
          sport,
          liked,
          imageUrl: sportImage,
        });
      } catch (error) {
        console.error("Error updating user preferences:", error);
      }

      const remainingSports = sports.filter((s) => s !== sport);
      setSports(remainingSports);

      const newSport =
        remainingSports[Math.floor(Math.random() * remainingSports.length)];
      setSport(newSport);
    }

    const remainingSports = sports.filter((s) => s !== sport);
    setSports(remainingSports);

    const newSport =
      remainingSports[Math.floor(Math.random() * remainingSports.length)];
    setSport(newSport);
  };

  return (
    <DashboardPageWrapper>
      <ThemeToggleButton />
      <ImageWrapper>
        {sportImage && <SportImage src={sportImage} />}
        <SportName>{sport}</SportName>
      </ImageWrapper>
      <DashboardLikeSection>
        <DashboardPageDisikeButton
          disabled={loading}
          onClick={() => handleSportChange(false)}
        >
          <DislikeIcon color={isDarkThemeActive ? "#FFFFFF" : "#D36060"} />
        </DashboardPageDisikeButton>
        <DashboardPageLikeButton
          disabled={loading}
          onClick={() => handleSportChange(true)}
        >
          <HeartIcon color="#fff" />
        </DashboardPageLikeButton>
      </DashboardLikeSection>
      <NavBar />
    </DashboardPageWrapper>
  );
};
