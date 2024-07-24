import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#633cff",
        "primary-hover": "#beadff",
        "secondary-hover": "#efebff",
        "border-color": "#d9d9d9",
        "error-color": "#ff3939",
        "dark-grey": "#333333",
        "grey-color": "#737373",
        "light-grey": "#fafafa",
      },
      fontFamily: {
        IntSans: ["InstrumentSans", "sans-serif"],
      },
      boxShadow: {
        xl: "0px 0px 32px 0px #633CFF40",
      },
    },
    screens: {
      sm: "468px",
      // => @media (min-width: 468px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }

      xl: "1680px",
      // => @media (min-width: 1680px) { ... }
    },
  },
  plugins: [],
};
export default config;
