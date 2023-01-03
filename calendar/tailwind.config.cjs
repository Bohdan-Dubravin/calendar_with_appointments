/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '7col': 'repeat(7, 40px)',
      },

      gridTemplateRows: {
        '27p': '27px',
      },
    },
  },
  plugins: [],
};
