import sveltePreprocess from "svelte-preprocess"
import staticAdapter from "@sveltejs/adapter-static"
import { cleanEnv, str } from "envalid"
import dotenv from "dotenv"

import autoprefixer from "autoprefixer"

dotenv.config({ path: ".env.local" })
const env = cleanEnv(process.env, {
  FIREBASE_APIKEY: str()
})

// /** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [autoprefixer()]
    }
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: staticAdapter(),
    target: "#svelte",
    vite: () => ({
      define: env
    })
  }
}

export default config
