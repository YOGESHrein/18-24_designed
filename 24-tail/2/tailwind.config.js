/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage:{
        "action-img":"url(img/mic.png)"
      },
      colors: {
        primary: "#ed7f39"
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

