import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['"Trajan Pro"', 'serif'], // use with className="font-heading"
      },
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
          beige: '#F8F6EB',
        }
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
export default config;
