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
        50: "#EDEEEF",
        100: "#C8C9CC",
        200: "#ADAFB4",
        300: "#888B92",
        400: "#71757d",
        500: "#4D525C",
        600: "#464b54",
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
        "container-mobile": "1rem",
        "container-tablet": "1.5rem",
        "container-desktop": "5rem",
      },
    },
  },
  plugins: [
    ({ addComponents }: PluginAPI) => {
      addComponents({
        ".text": {
          "&-title": {
            fontFamily: "var(--display-font)",
            fontWeight: "500",

            "&-h1": {
              fontSize: "6rem",
              lineHeight: "6.75rem",
            },

            "&-h2": {
              fontSize: "3.75rem",
              lineHeight: "4rem",
            },

            "&-h3": {
              fontSize: "3rem",
              lineHeight: "3.25rem",
            },

            "&-h4": {
              fontSize: "2rem",
              lineHeight: "2.25rem",
            },

            "&-h5": {
              fontSize: "1.5rem",
              lineHeight: "1.75rem",
            },

            "&-h6": {
              fontSize: "1.25rem",
              lineHeight: "1.5rem",
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
          "&-body": {
            fontFamily: "var(--body-font)",
            fontWeight: "500",

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

            "&-caption": {
              fontSize: "0.75rem",
              lineHeight: "1rem",
              letterSpacing: "0.025rem",
            },

            "&-overline": {
              fontSize: "0.75rem",
              lineHeight: "1.5rem",
              letterSpacing: "0.0625rem",
              textTransform: "uppercase",
            },
          },
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
        },
      });
    },
  ],
};

export default config;
