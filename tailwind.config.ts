import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    colors: {
      "text-color": "rgb(var(--text-color))",
      "bg-primary": "rgb(var(--bg-primary))",
      "bg-secondary": "rgb(var(--bg-secondary))",
      red: colors.red,
      zinc: colors.zinc,
    },
  },
  plugins: [],
};

export default config;
