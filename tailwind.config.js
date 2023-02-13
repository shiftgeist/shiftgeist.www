/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#DB924B',
          secondary: '#263E3F',
          accent: '#10576D',
          neutral: '#120C12',
          'base-100': '#20161F',
          info: '#8DCAC1',
          success: '#9DB787',
          warning: '#FFD25F',
          error: '#FC9581',
        },
      },
    ],
  },
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
  plugins: [require('daisyui')],
}
