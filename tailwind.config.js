/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // colors: {
      //   primary: 'rgb(var(--color-primary) / <alpha-value>)',
      //   secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      //   black: '#0E0E18',
      //   'black-100': '#000',
      // },
      gap: {
        clamp: 'clamp(10px, 4vw, 100px)',
      },
      transitionDuration: {
        400: '400ms',
      },
      backgroundSize: {
        '100%': '100%',
        '105%': '105%',
      },
      transitionProperty: {
        all: 'all, background-size',
      },
    },
  },
  plugins: [],
}
