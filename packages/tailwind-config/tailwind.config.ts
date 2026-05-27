import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        panel: "#09090b",
        border: "rgba(255, 255, 255, 0.06)",
        accent: {
          indigo: "#6366f1",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["Geist Sans", "Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
