import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F8F4EE",
        parchment: "#F6F1E8",
        ink: "#0B1220",
        mutedInk: "#4B5563",
        peach: "#F2A766",
        gold: "#EFA35C",
        clay: "#B85F3C",
        card: "#FFF8EE",
        line: "#E8D9C8"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(38, 24, 12, 0.08)",
        lift: "0 10px 30px rgba(38, 24, 12, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
