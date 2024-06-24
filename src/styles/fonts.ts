import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../../public/font/Poppins-Black.ttf",
      weight: "900",
    },
    {
      path: "../../public/font/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/font/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/font/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/font/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/font/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/font/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/font/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/font/Poppins-Thin.ttf",
      weight: "100",
    },
  ],
  variable: "--poppins-font",
  fallback: ["Poppins", "sans-serif"],
});
