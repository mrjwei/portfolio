const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Maven Pro', 'sans-serif'],
      ...defaultTheme.fontFamily
    },
    colors: {
      'red': {
        100: '#f8e4e4',
        200: '#d9a2a2',
        300: '#b54e4e',
        400: '#811515',
      },
      ...defaultTheme.colors
    },
    extend: {
      maxWidth: {
        logo: '35px'
      },
      colors: {
        bgWhite: '#fff',
      }
    },
  },
  plugins: [],
}
