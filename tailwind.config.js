/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        palanquin: ["Palanquin", "sans-serif"],
        chakra:[ 'Chakra Petch', "sans-serif"],
      },
      backgroundImage:{
        homebg: 'url(/src/assets/images/home-bg.jpg)'
      }
    },
  },
  plugins: [],
}

