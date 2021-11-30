<script lang="ts" setup>
interface ResData {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
}

const res = await useFetch('/engineer-blog', {
  // pick: ['contents'],
  baseURL: 'https://kira-engineer.microcms.io/api/v1/',
  headers: {
    'X-MICROCMS-API-KEY': '2cd222d7e07842e291f7bfae11fe641d559e',
  },
});
const articleList: ResData[] = res.data.value['contents'];
</script>

<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <HeaderLayout />

      <main class="mt-16">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-700 text-2xl lg:text-3xl font-bold text-center mb-2"
          >
            記事一覧
          </h2>
          <div
            class="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-1 mx-auto rounded"
          ></div>
        </div>
        <!-- text - end -->

        <ul
          class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8"
        >
          <!-- article - start -->
          <template v-for="data in articleList">
            <li class="border rounded-lg overflow-hidden">
              <nuxt-link
                :to="`/blog/${data.id}`"
                class="w-full h-full flex flex-col md:flex-row items-center"
              >
                <div
                  class="group w-full md:w-32 lg:w-48 h-48 md:h-full self-start flex-shrink-0 bg-gray-100 overflow-hidden relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                  />
                </div>

                <div class="flex flex-col gap-2 p-4 lg:p-6">
                  <span class="text-gray-400 text-sm">{{
                    data.createdAt
                  }}</span>

                  <h2
                    class="text-gray-800 text-xl font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    {{ data.title }}
                  </h2>

                  <p class="text-gray-500">
                    {{ `${data.content.slice(3, 30)}...` }}
                  </p>

                  <span
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </span>
                </div>
              </nuxt-link>
            </li>
          </template>
          <!-- article - end -->
        </ul>
      </main>
      <FooterLayout />
    </div>
  </div>
</template>
