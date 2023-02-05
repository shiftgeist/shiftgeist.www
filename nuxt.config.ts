// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/main.css'],
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/getting-started/options
    'nuxt-icon', // https://nuxt.com/modules/icon#usage
    '@nuxt/content', // https://content.nuxtjs.org/
  ],
})
