import { useEffect, useState } from "react";
import { fetchSportImage } from "./SportsData";

const useFetchImages = (likedSports: string[], dislikedSports: string[]) => {
  const [sportsImages, setSportsImages] = useState<{ [sport: string]: string }>(
    {}
  );

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

  return sportsImages;
};

export default useFetchImages;
