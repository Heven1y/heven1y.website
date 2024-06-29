import localFont from "next/font/local";

export const raleway = localFont({
  src: [
    {
      path: "../../../public/font/Raleway-Black.ttf",
      weight: "900",
    },
    {
      path: "../../../public/font/Raleway-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../../public/font/Raleway-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../public/font/Raleway-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/font/Raleway-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/font/Raleway-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/font/Raleway-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../public/font/Raleway-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../../public/font/Raleway-Thin.ttf",
      weight: "100",
    },
  ],
  variable: "--raleway-font",
  fallback: ["Raleway", "sans-serif"],
});
