const dev = process.env.ROLLUP_WATCH;
const Matercolor = require("matercolors");

const matercolorTailwind = (color) => {
  const mcolor = new Matercolor(color);
  const primary = mcolor.makePalette("primary");
  let colors = {};

  for (const c of Object.keys(primary)) {
    colors[c] = primary[c].hex;
  }

  colors.brand = color;

  return colors;
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: !dev,
    content: ["./src/**/*.svelte", "./public/index.html"],
  },
  theme: {
    extend: {
      colors: {
        "brand-light": "#F6F7F8",
        "brand-dark": "#292A2B",
        red: matercolorTailwind("#FF506D"),
        yellow: matercolorTailwind("#FFCC95"),
        green: matercolorTailwind("#19F9D8"),
        cyan: matercolorTailwind("#43D5EC"),
        blue: matercolorTailwind("#6CB1FF"),
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "focus", "group-hover", "group-focus"],
  },
  plugins: [],
};
