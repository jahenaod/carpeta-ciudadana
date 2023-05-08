import React from "react";
import { IconT } from "../../types/icon.type";

export const HomeIcon = (props: IconT) => {
  const { color = "white", width = "19", height = "20", className } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.364 8.127 10.55 1.024a1.556 1.556 0 0 0-2.102 0L.636 8.127a1.566 1.566 0 0 0-.511 1.156v9.03a1.564 1.564 0 0 0 1.563 1.562h15.624a1.564 1.564 0 0 0 1.563-1.563V9.284a1.566 1.566 0 0 0-.511-1.156Z"
        fill={color}
      />
    </svg>
  );
};
