<script lang="ts" setup>
import { ResData } from '../../../composables/types/api/microcmsResponse';
const ctx = useRuntimeConfig();

const route = useRoute();
const { data: article } = await useFetch<string, ResData>(
  `/engineer-blog/${route.params.id}`,
  {
    baseURL: ctx.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': ctx.apiKey,
    },
    pick: [
      'id',
      'title',
      'content',
      'createdAt',
      'updatedAt',
      'publishedAt',
      'image',
    ],
  }
);
</script>

<template>
  <div class="bg-gray-100 pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <HeaderLayout />
      <!-- <div class="py-6 lg:container mx-auto"> -->
      <div class="grid grid-cols-3 gap-4 py-6 lg:container mx-auto">
        <div class="col-span-2 bg-white rounded-md shadow">
          <div class="px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
            <h1
              class="text-gray-800 text-2xl sm:text-3xl font-bold text-center"
            >
              {{ article.title }}
            </h1>

            <div class="mt-8 w-full mx-auto">
              <p class="publishedAt text-gray-400">
                公開日:
                <time :datetime="article.publishedAt">{{
                  new Date(Date.parse(article.publishedAt)).toLocaleDateString()
                }}</time>
              </p>
              <div
                class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8 w-full h-2/4"
              >
                <img
                  :src="article.image.url"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div class="w-full">
                <div class="articles" v-html="article.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 h-screen">
          <div class="rounded-md shadow bg-white px-16 py-8 text-center">
            <img
              src="/images/me.png"
              alt=""
              class="rounded-full w-40 h-40 mx-auto"
            />
            <span class="text-gray-800 font-bold text-2xl mt-4 inline-block"
              >田中 輝良 / Kira Tanaka</span
            >
            <div class="bg-indigo-600 h-1 w-12 mx-auto mt-4 rounded-sm"></div>
            <div class="text-left text-gray-700 mt-6">
              <p>花屋見習いからフロントエンドエンジニアへ転職。</p>
              <p class="mt-2">当サイト：Nuxt3 + microCMS</p>
              <p class="mt-2">🌳Vue.js / ⛰Nuxt.js / 📘TypeScript</p>
            </div>
            <SnsNav :current-classes="['justify-center', 'mt-4']" />
          </div>
        </div>
      </div>
      <FooterLayout />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.articles) {
  letter-spacing: 0.5px;

  > h2 {
    font-size: 24px;
    font-weight: bold;
    color: #66a1ea;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  > h3 {
    font-size: 20px;
    font-weight: bold;
    color: #2d3748;
    margin: 30px 0 15px 5px;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0.5em;
      left: -1.5em;
      width: 10px;
      height: 5px;
      border-left: 3px solid #66a1ea;
      border-bottom: 3px solid #66a1ea;
      transform: rotate(-45deg);
    }
  }

  > ul {
    list-style: circle;
    list-style-position: inside;
  }

  > ol {
    list-style: decimal;
    list-style-position: inside;
  }

  > p {
    line-height: 1.8;
    letter-spacing: 0.5px;

    > a {
      color: #0000ee;
    }

    > span {
      color: #a0aec0;
    }

    > img {
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }

  > pre {
    > code {
      display: block;
      padding: 1.1em 1.25em; /* 文字周りの余白 */
      color: #444; /* 文字色 */
      background-color: #e7edf3; /* 背景色 */
      border-radius: 3px; /* 角丸 */
      border: solid 1px #d6dde4; /* 枠線 */
    }
  }

  > blockquote {
    margin-top: 45px;
    position: relative;
    padding: 35px 15px 10px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #f5f5f5;
    color: #777777;
    border-left: 4px solid #a3bffa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);

    &::before {
      display: inline-block;
      position: absolute;
      top: 5px;
      left: 3px;
      content: '“';
      font-family: sans-serif;
      color: #a3bffa;
      font-size: 90px;
      line-height: 1;
    }
  }
}
</style>
