/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8e44ad",
        secondary: "#30C88F",
        tertiary: "#2D314D",
        appGray: "#9596A5",
      },
    },
  },
  plugins: [],
};

module.exports = config;