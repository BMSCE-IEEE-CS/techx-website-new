import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#353535",
        mBlue: "#1560a3",
      },
      animation: {
        "infinite-scroll": "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        hero: "url(/images/techx.png)",
      },
      dropShadow: {
        blueDrop: "6px 2px 2px rgb(21, 96, 163)",
      },
      listStyleType: {
        points: "url(/images/arrow.png)",
      },
    },
  },
  plugins: [],
};
export default config;
