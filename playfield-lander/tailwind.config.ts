import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-signifier)", "Times New Roman", "Times", "serif"],
        mono: [
          "var(--font-consolas)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Liberation Mono",
          "monospace",
        ],
      },
      colors: {
        bg: "#F5F4EF",
        ink: "#0B0B0B",
        rule: "#DCD9CF",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
