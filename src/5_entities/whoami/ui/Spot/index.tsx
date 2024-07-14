import classNames from "classnames";

import styles from "./Spot.module.scss";

export default function Spot({ className }: { className?: string }) {
  const classSpot = classNames(styles.spot, className);

  return (
    <svg
      width="1419"
      height="731"
      viewBox="0 0 1419 731"
      className={classSpot}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_30_72)">
        <path
          d="M491.469 616.267C-258.531 497.126 295.443 360.834 329.469 192.626C363.496 24.418 989.095 128.646 1253.47 182.126C1517.84 235.606 1065.8 240.324 1031.77 408.533C997.745 576.741 815.969 667.816 491.469 616.267Z"
          fill="#363636"
          fillOpacity="0.5"
        />
        <path
          d="M491.548 615.774C304.043 585.988 198.133 555.14 145.225 523.038C118.777 506.99 105.661 490.681 102.139 474.115C98.6169 457.552 104.655 440.581 116.869 423.134C129.081 405.688 147.417 387.84 168.349 369.551C180.364 359.053 193.211 348.429 206.234 337.66C215.909 329.66 225.681 321.579 235.282 313.41C257.787 294.259 279.314 274.65 296.281 254.56C313.245 234.473 325.682 213.869 329.959 192.725C334.178 171.868 347.567 155.202 368.364 142.11C389.17 129.013 417.364 119.511 451.116 112.993C518.619 99.9579 608.221 98.885 705.058 104.742C898.723 116.456 1121.19 155.878 1253.37 182.616C1286.42 189.301 1308.22 195.216 1321.04 200.769C1327.46 203.549 1331.57 206.212 1333.71 208.785C1334.78 210.063 1335.35 211.301 1335.5 212.505C1335.65 213.707 1335.38 214.922 1334.71 216.171C1333.34 218.696 1330.32 221.303 1325.79 224.027C1321.29 226.741 1315.36 229.532 1308.28 232.45C1295.3 237.803 1278.49 243.562 1259.55 250.053C1257.84 250.641 1256.11 251.234 1254.36 251.833C1212.25 266.277 1160.78 284.321 1117.69 309.282C1074.63 334.234 1039.83 366.165 1031.28 408.434C1014.3 492.36 960.477 557.053 870.357 594.347C780.214 631.65 653.748 641.54 491.548 615.774Z"
          stroke="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_30_72"
          x="0.643158"
          y="0.841614"
          width="1435.39"
          height="729.812"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_30_72"
          />
        </filter>
      </defs>
    </svg>
  );
}
