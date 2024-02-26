/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/*.html', './client/*.js', './client/CRUD/family/*.js'],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#2C3D55',
        'superior-blue': '#7C99B4',
        'floral-white': '#FFF8F0',
        'french-gray': '#AEA9B1',
        'indian-red': '#C1666B',
        'charcoal': '#34485B',

      },
      fontFamily: {
        'comfort': ["Comfortaa", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

