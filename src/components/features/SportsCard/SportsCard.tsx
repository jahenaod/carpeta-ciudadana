import React from "react";
import { Sport } from "../../../interface/Sports";

interface SportCardProps {
  sport: Sport;
}

const SportCard: React.FC<SportCardProps> = ({ sport }) => {
  return (
    <div>
      <img src={sport.strSportThumb} alt={sport.strSport} />
      <p>{sport.strSport}</p>
    </div>
  );
};

export default SportCard;
