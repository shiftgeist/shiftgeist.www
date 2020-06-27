module.exports = {
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: {
        100: "#f0eded", // FG
        200: "#e3e1e1",
        300: "#d1cfcf",
        400: "#acaaaa",
        500: "#8b8989", // Muted
        600: "#646262",
        700: "#514f4f",
        800: "#333131",
        900: "#131111", // BG
      },
      red: {
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5250",
        500: "#f44236",
        600: "#e53935", // Main
        700: "#d32e2f",
        800: "#c62728",
        900: "#b71a1c",
      },
      blue: {
        100: "#baddf7",
        200: "#8fc8f2",
        300: "#63b2ec",
        400: "#41a2e9",
        500: "#1E92E6", // Main
        600: "#1785d9",
        700: "#0e73c6",
        800: "#0663b4",
        900: "#004596",
      },
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      inset: {
        "1/2": "50%",
        "-1/2": "-50%",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "focus", "group-hover", "group-focus"],
  },
  plugins: [],
  purge: {
    enable: false,
  },
};
