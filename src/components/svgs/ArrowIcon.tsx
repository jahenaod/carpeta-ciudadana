import React from "react";
import { IconT } from "../../types/icon.type";

export const ArrowIcon = (props: IconT) => {
  const { color = "white", size = "30", className } = props;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#a)"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M25.313 15H4.688m8.437-8.437L4.687 15l8.438 8.438" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
