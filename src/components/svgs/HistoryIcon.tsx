import React from "react";
import { IconT } from "../../types/icon.type";

export const HistoryIcon = (props: IconT) => {
  const { color = "white", size = "19", className } = props;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5.125A9.375 9.375 0 1 0 18.875 9.5 9.385 9.385 0 0 0 9.5.125Zm4.42 6.06-3.867 3.867a.782.782 0 0 1-1.105-1.104l3.867-3.867a.782.782 0 0 1 1.104 1.104Z"
        fill={color}
      />
    </svg>
  );
};
