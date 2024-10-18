import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F6",
        textPrimary: "#1492df",
        textBlack: "#2B2B2B",
        paragraphFont:"#767676",
        textSecondary:"#191658",
      },
    },
  },
  plugins: [],
};
export default config;
