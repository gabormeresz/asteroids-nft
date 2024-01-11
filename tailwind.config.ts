import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jura)"],
        logo: ["var(--font-lexend-zetta)"]
      },
      colors: {
        neon: "#BBE124",
        neon_light: "#D2FC2A"
      },
      dropShadow: {
        "sm-black": "4px 4px 20px rgba(0, 0, 0, 0.35)",
        "sm-white": "4px 4px 20px rgba(256, 256, 256, 0.1)"
      },
      letterSpacing: {
        wide: ".2em",
        widest: ".25em"
      }
    }
  },
  plugins: []
};
export default config;
