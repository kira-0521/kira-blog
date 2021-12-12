import { defineNuxtConfig } from 'nuxt3';
const { BASE_URL, API_KEY } = process.env;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  /*
   ** Headers of the page
   */
  head: {
    title: 'Terakoya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'フロントエンドエンジニアとしてのTipsやプログラミング初心者のためのノウハウを記事にしています。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Terakoya',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://kira-terakoya.netlify.app/favicon.ico',
      },
    ],
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
