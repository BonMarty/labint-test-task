/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#191C1F',
        darkGray: '#5E646A',
        gray: '#83898F',
        midGray: '#C2C8CD',
        lightGray: '#ECEFF2',
        extralightGray: '#F6F8FA',
        white: '#FFFFFF',
        dangerous: '#F13636',
        greenSuccess: '#25CD82',
        primaryDisabled: '#ABCAE6',
        primary: '#2A6CEA',
        primaryHover: '#397DFF',
      },
      divideColor: {
        lightGray: '#ECEFF2',
      },
      boxShadow: {
        default: '0px 5px 24px 0px #0000001A',
        hover: '0px 15px 24px 0px #0000001A',
      },
      screens: {
        1920: '1920px',
      },
    },
  },
  plugins: [],
};
