import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--display-font)",
      body: "var(--body-font)",
    },
    colors: {
      grey: {
        white: "#FFFFFF",
        300: "#888B92",
        500: "#4D525C",
        700: "#373A41",
        800: "#2A2D33",
        900: "#202227",
        black: "#000000",
      },
      yellow: {
        400: "#FDD46B",
        500: "#FDC946",
      },
    },
    screens: {
      mobile: "360px",
      tablet: "768px",
      laptop: "1440px",
      desktop: "1920px",
    },
    boxShadow: {
      "stroke-small": "2px 2px 0px 0px #202227",
      drop: "0px 4px 8px 0px rgba(0, 0, 0, 0.40)",
      none: "none",
    },
    extend: {
      spacing: {
        mobile: "1rem",
        tablet: "1.5rem",
        desktop: "5rem",
      },
    },
  },
  plugins: [
    ({ addComponents }: PluginAPI) => {
      addComponents({
        ".text": {
          "&-label": {
            fontFamily: "var(--display-font)",
            fontWeight: "600",
            letterSpacing: "0.005em",

            "&-small": {
              fontSize: "0.8125rem",
              lineHeight: "1.25rem",
            },

            "&-medium": {
              fontSize: "0.875rem",
              lineHeight: "1.375rem",
            },

            "&-large": {
              fontSize: "1rem",
              lineHeight: "1.625rem",
            },
          },
          "&-subtitile": {
            fontFamily: "var(--body-font)",
            fontWeight: "700",
            letterSpacing: "0px",

            "&-1": {
              fontSize: "1.125rem",
              lineHeight: "1.5rem",
            },

            "&-2": {
              fontSize: "1rem",
              lineHeight: "1.375rem",
            },

            "&-3": {
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            },
          },
        },
      });
    },
  ],
};

export default config;
