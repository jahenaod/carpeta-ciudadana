import axios from "axios";

interface League {
  strSport: string;
}

export const fetchSportsData = async () => {
  try {
    const response = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
    );
    const leagues = response.data.leagues;

    const sportsSet = new Set();
    leagues.forEach((league: League) => {
      sportsSet.add(league.strSport);
    });

    const uniqueSports = Array.from(sportsSet) as string[];
    return uniqueSports;
  } catch (error) {
    console.error("Error fetching sports data:", error);
    return [];
  }
};

export const fetchSportImage = async (sport: string) => {
  if (!sport) return "";

  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${sport}&client_id=IKAjPxFtEgnTgfowjB_YA-E31culNPG7M5U3bobyz3w`
    );
    const image = response.data.results[0].urls.regular;
    return image;
  } catch (error) {
    console.error("Error fetching sport image:", error);
    return "";
  }
};
