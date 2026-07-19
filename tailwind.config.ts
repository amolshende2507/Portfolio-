import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#06060a",
          elevated: "#0b0b12",
          card: "#0e0e17",
        },
        ink: {
          primary: "#f2f3f7",
          secondary: "#9497a8",
          muted: "#5c5f70",
        },
        accent: {
          blue: "#4c8dff",
          purple: "#8b6bff",
          cyan: "#5eead4",
        },
        line: "rgba(255,255,255,0.08)",
        glass: "rgba(255,255,255,0.035)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(6,6,10,0) 0%, #06060a 90%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "accent-gradient": "linear-gradient(135deg, #4c8dff 0%, #8b6bff 100%)",
        "radial-glow":
          "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(76,141,255,0.12), transparent 40%)",
      },
      backgroundSize: {
        grid: "100% 100%, 44px 44px, 44px 44px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(76,141,255,0.25)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
