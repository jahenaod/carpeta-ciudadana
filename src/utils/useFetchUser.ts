import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { auth, db } from "../services/firebase";

const useFetchUser = (
  user: User | null,
  setUser: (user: User | null) => void
) => {
  const [likedSports, setLikedSports] = useState<string[]>([]);
  const [dislikedSports, setDislikedSports] = useState<string[]>([]);

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

  return { likedSports, dislikedSports };
};

export default useFetchUser;
