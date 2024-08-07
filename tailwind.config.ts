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
        mOrange: "#f79400",
      },
      backgroundImage: {
        hero: "url(/images/techx.png)",
      },
      dropShadow: {
        orangeDrop: "6px 2px 2px rgb(247, 148, 0)",
      },
      listStyleType: {
        points: "url(/images/arrow.png)",
      },
    },
  },
  plugins: [],
};
export default config;
