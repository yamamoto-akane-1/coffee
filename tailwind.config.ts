import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf6f1',
          100: '#f5ede3',
          200: '#ebdbc7',
          300: '#e0c9ab',
          400: '#d5b78f',
          500: '#c9a573',
          600: '#b38a5c',
          700: '#8e6d48',
          800: '#6b5236',
          900: '#4a3924',
        },
      },
    },
  },
  plugins: [],
};

export default config; 