import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#152018",
        paper: "#faf8f3",
        moss: "#2f5d46",
        line: "#ded8cc"
      }
    }
  },
  plugins: []
};

export default config;
