import React from "react";
import { IconT } from "../../types/icon.type";

export const DislikeIcon = (props: IconT) => {
  const { color = "white", size = "16", className } = props;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.999.999a1.534 1.534 0 0 1 2.17 0l4.699 4.7 4.7-4.7a1.534 1.534 0 0 1 2.169 2.169l-4.7 4.7 4.7 4.7a1.534 1.534 0 0 1-2.17 2.169l-4.699-4.7-4.7 4.7a1.534 1.534 0 1 1-2.17-2.17l4.7-4.7-4.7-4.699a1.534 1.534 0 0 1 0-2.17Z"
        fill={color}
      />
    </svg>
  );
};
