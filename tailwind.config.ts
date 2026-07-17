import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-top": "#BFE7F8",
        "sky-bottom": "#EAF7FD",
        cream: "#FFF9EC",
        "cream-2": "#FFF2D8",
        board: "#8B4A3D",
        "board-dark": "#6E3A2F",
        wood: "#E3A863",
        "wood-dark": "#C98A47",
        sun: "#FFC93C",
        "sun-dark": "#E8A916",
        grass: "#8FCB8A",
        "grass-dark": "#5FA75C",
        pink: "#F6A8C0",
        lavender: "#B8A6E8",
        mint: "#7FD8C4",
        coral: "#F0806B",
        ink: "#4A3B32",
        "ink-soft": "#7A6A5C",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
        label: ["var(--font-quicksand)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 10px 24px rgba(139,74,61,0.12)",
        pop: "0 6px 0 rgba(0,0,0,0.08)",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        float1: "float1 9s ease-in-out infinite",
        float2: "float2 11s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
