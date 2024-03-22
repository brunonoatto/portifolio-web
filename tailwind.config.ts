import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    colors: {
      textColor: "rgb(var(--text-color))",
      bgColor: "rgb(var(--bg-color))",
      red: colors.red,
    },
  },
  plugins: [],
};

export default config;
