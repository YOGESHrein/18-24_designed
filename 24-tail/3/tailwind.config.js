/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./public/*.html"],
  theme: {
    container:{
      center: true,
      padding: '1rem',
      screens:{
        lg: '1100px',
        xl: '1200px',
      }
    },
    extend: {},
  },
  plugins: [],
}

