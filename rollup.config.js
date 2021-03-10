import commonjs from "@rollup/plugin-commonjs";
import { config } from "dotenv";
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

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
    sourcemap: !production,
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
      extensions: [".svelte", ".svx"],
      preprocess: {
        ...mdsvex(),
        ...image(),
      },
      compilerOptions: {
        dev: !production,
        css: false,
      },
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
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production &&
      terser({
        output: {
          comments: false,
          ie8: false,
        },
      }),

    replace({
      preventAssignment: true,
      values: {
        __version__: pgk.version,
        __themeColor__: "#fff",
      },
    }),
  ],
};

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "serve", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}
