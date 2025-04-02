const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto": ['"Noto Sans"', 'sans-serif']
      },
      keyframes:{
        wiggle: {
          '0%, 100%': {transform: 'rotate(-15deg)'},
          '50%': {transform: 'rotate(15deg)'},
        }
      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

