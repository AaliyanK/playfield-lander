import localFont from "next/font/local";

// Signifier font for main text
export const signifier = localFont({
  src: [
    {
      path: "../../public/fonts/TestSignifier-Regular-BF663d8462c4c0b.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TestSignifier-Medium-BF663d8462c7c04.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TestSignifier-Bold-BF663d84626293d.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-signifier",
  display: "swap",
});

// Consolas font for body text
export const consolas = localFont({
  src: [
    {
      path: "../../public/fonts/Consolas.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Consolas-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-consolas",
  display: "swap",
  fallback: ["Consolas", "Monaco", "monospace"],
});
