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
    extend: {
      maxWidth: {
        logo: '35px'
      },
      minHeight: {
        card: "200px"
      },
      fontSize: {
        '5xl': ['2.8rem', { lineHeight: '1' }]
      },
      colors: {
        'red': {
          100: '#f8e4e4',
          150: '#f7cdcd',
          200: '#d9a2a2',
          300: '#b54e4e',
          400: '#811515',
        },
        'mute': '#F7F5F5',
      },
      dropShadow: {
        "button": '0 15px 15px rgb(0 0 0 / 0.03)',
        "card": ['0 30px 20px rgb(0 0 0 / 0.03)', '0 10px 10px rgb(0 0 0 / 0.03)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
