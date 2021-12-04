<script lang="ts" setup>
import { ResData } from '../../../composables/types/api/microcmsResponse';

const route = useRoute();
const { data: article } = await useFetch<string, ResData>(
  `/engineer-blog/${route.params.id}?richEditorFormat=object`,
  {
    baseURL: 'https://kira-engineer.microcms.io/api/v1/',
    pick: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
    headers: {
      'X-MICROCMS-API-KEY': '2cd222d7e07842e291f7bfae11fe641d559e',
    },
  }
);
console.log(article.value.content.contents);
</script>

<template>
  <div class="bg-gray-100 pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <HeaderLayout />
      <div class="py-6 lg:container mx-auto">
        <!-- <div class="grid grid-cols-3 gap-4 py-6 lg:container mx-auto"> -->
        <div class="col-span-2 bg-white rounded-md shadow">
          <div class="px-6 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-10">
            <div class="px-4 md:px-8">
              <h1
                class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6"
              >
                {{ article.title }}
              </h1>

              <div
                class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8 w-2/3 h-2/4 mx-auto"
              >
                <img
                  :src="article.content.contents[0].value"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div class="w-2/3 mx-auto">
                <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
                  {{ article.content.contents[1].value[1].value }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-span-1 bg-white rounded-md shadow"></div> -->
      </div>
      <FooterLayout />
    </div>
  </div>
</template>
