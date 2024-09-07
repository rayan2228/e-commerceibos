/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1320px"
      }
    },
    extend: {
      fontFamily: {
        "barlow": ["Barlow",'sans-serif']
      },
      colors: {
        cbg: "#FAFAFA",
        cStroke: "#F5F5F5",
        tSecondary: "#707070"
      }
    },
  },
  plugins: [],
}