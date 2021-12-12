import { defineNuxtConfig } from 'nuxt3';
const { BASE_URL, API_KEY } = process.env;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: 'Terakoya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
    link: [{ rel: 'favicon', href: 'favicon.ico' }],
  },
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
  privateRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
  },
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
