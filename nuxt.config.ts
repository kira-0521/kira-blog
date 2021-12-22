import { defineNuxtConfig } from 'nuxt3';
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
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
