<script lang="ts" setup>
import useFetchArticle from '~~/composables/hooks/useFetchArticle';
import { ResData } from '../composables/types/api/microcmsResponse';
const ctx = useRuntimeConfig();

const { data: articles } = await useFetch<string, { contents: Array<ResData> }>(
  '/engineer-blog',
  {
    baseURL: ctx.baseURL,
    headers: {
      'X-MICROCMS-API-KEY': ctx.apiKey,
    },
  }
);
</script>

<template>
  <MainLayoutWrapper
    :mainClasses="['bg-white', 'mt-28', 'sm:mt-32']"
    :inner-classes="['px-4', 'md:px-8']"
  >
    <div class="mb-10 md:mb-16 md:inline-block block mx-auto">
      <h2
        class="text-gray-700 text-2xl lg:text-3xl font-bold mb-2 text-center relative md:pl-4 article-list-title"
      >
        記事一覧
      </h2>
    </div>

    <ul
      class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8"
    >
      <template v-for="article in articles.contents">
        <li class="border rounded-lg overflow-hidden">
          <nuxt-link
            :to="`/blog/${article.id}`"
            class="w-full h-full flex flex-col md:flex-row items-center"
          >
            <div
              class="group w-full md:w-32 lg:w-48 h-48 md:h-full self-start flex-shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                :src="article.image.url"
                :alt="article.alt"
                loading="lazy"
                class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
              />
            </div>

            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <div class="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span class="text-sm ml-2">
                  {{
                    new Date(Date.parse(article.updatedAt)).toLocaleDateString()
                  }}</span
                >
              </div>

              <h2
                class="text-gray-800 text-xl font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100"
              >
                {{ article.title }}
              </h2>

              <Tags :tags="article.tags" />

              <span
                class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
              >
                Read
              </span>
            </div>
          </nuxt-link>
        </li>
      </template>
    </ul>
  </MainLayoutWrapper>
</template>

<style scoped lang="scss">
.article-list-title {
  position: relative;

  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
      width: 6px;
      height: 100%;
      background: #667eea;
    }
  }
}
</style>
