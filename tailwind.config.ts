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
        brand: {
          charcoal: '#3F4B51',
          lightTeal: '#ADC3BC',
          mint: '#C9D8AC',
          forest: '#3E6E5C',
          darkTeal: '#356C75',
          beige: '#FDFBF7',
        }
      }
    },
  },
  plugins: [],
};
export default config;
