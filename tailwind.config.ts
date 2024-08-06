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
        orangeDrop: "10px 10px 0 rgb(247, 148, 0)",
      },
    },
  },
  plugins: [],
};
export default config;
