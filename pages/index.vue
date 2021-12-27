<script lang="ts" setup>
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
    :mainClasses="['bg-white']"
    :inner-classes="['px-4', 'md:px-8', 'mt-12']"
  >
    <div class="mb-10 md:mb-16 md:inline-block block mx-auto">
      <h2 class="text-gray-700 text-2xl lg:text-3xl font-bold mb-2 text-center">
        記事一覧
      </h2>
      <div
        class="bg-gradient-to-r from-green-400 to-indigo-500 w-16 h-1 mx-auto rounded"
      ></div>
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
              <span class="text-gray-400 text-sm"
                >更新:
                {{
                  new Date(Date.parse(article.updatedAt)).toLocaleDateString()
                }}</span
              >

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
