/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: '#b98b59'
      },

      fontFamily: {
        MontSerrat: ['Montserrat', 'sans-serif']
      },

      screens: {
        'mobile': {'raw': '(max-width: 576px)'},
        'tablet': { 'raw': '(max-width: 800px)' },
        'computer': {'raw': '(max-width: 1300px)'},
      }

    },
  },
  plugins: [],
}
