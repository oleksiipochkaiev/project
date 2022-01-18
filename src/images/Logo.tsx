import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="56"
      fill="none"
      viewBox="0 0 54 56"
    >
      <ellipse cx="24.038" cy="24" fill="#5D71DD" rx="24.038" ry="24"/>
      <g filter="url(#filter0_d_2_121)">
        <ellipse
          cx="37.019"
          cy="35.04"
          fill="#fff"
          rx="12.981"
          ry="12.96"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_121"
          width="33.962"
          height="33.92"
          x="20.038"
          y="22.08"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix values="0 0 0 0 0.224444 0 0 0 0 0.272708 0 0 0 0 0.533333 0 0 0 0.18 0"/>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_121"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2_121"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Logo;
