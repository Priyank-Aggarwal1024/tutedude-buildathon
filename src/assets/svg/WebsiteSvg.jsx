import React from "react";

const WebsiteSvg = ({
  width = 57,
  height = 57,
  fill = "#4F2A0E",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 57 57"
    fill="none"
    {...props}
  >
    <path
      d="M33.1834 43.807H23.7024V34.3261H33.1834V43.807ZM45.1774 43.807H35.6964V34.3261H45.1774V43.807ZM21.1894 43.807H11.7084V34.3261H21.1894V43.807ZM45.1774 13.8221V31.299H11.7085V13.8221H45.1774ZM49.9749 8.79599H7.02506V48.2048H49.975L49.9749 8.79599ZM0 55.1727V1.82812H57V55.1728L0 55.1727Z"
      fill={fill}
    />
  </svg>
);

export default WebsiteSvg;
