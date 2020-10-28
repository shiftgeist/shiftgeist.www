import boxen from "boxen";
import commonjs from "@rollup/plugin-commonjs";
import { config } from "dotenv";
import copy from "rollup-plugin-copy";
import image from "svelte-image";
import livereload from "rollup-plugin-livereload";
import { mdsvex } from "mdsvex";
import pgk from "./package.json";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

config();

const dev = process.env.ROLLUP_WATCH === "true";
console.log(
  boxen(`Mode: ${dev ? "Develop" : "Production"}`, {
    padding: 1,
    borderColor: dev ? "cyan" : "red",
  })
);

export default {
  input: "src/main.js",
  output: {
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
    sourcemap: dev,
  },
  plugins: [
    postcss({
      extract: true,
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-csso")({
          comments: false,
        }),
      ],
    }),

    svelte({
      dev,
      extensions: [".svelte", ".svx"],
      css: (css) => {
        css.write("public/build/bundle.css");
      },
      preprocess: {
        ...mdsvex(),
        ...image(),
      },
    }),

    copy({
      targets: [{ src: "static/g", dest: "public" }],
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    dev && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    dev && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    !dev &&
      terser({
        output: {
          comments: false,
          ie8: false,
        },
      }),

    replace({
      __version__: pgk.version,
      __themeColor__: "#fff",
    }),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}
