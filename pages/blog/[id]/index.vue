<script lang="ts" setup>
interface ResData {
  id: number;
  name: string;
  email: string;
}

const route = useRoute();
const id = route.params.id;
console.log(id);
const { data: article } = await useFetch<ResData>(`/engineer-blog/${id}`, {
  baseURL: 'https://kira-engineer.microcms.io/api/v1/',
  pick: ['id', 'title', 'content'],
  headers: {
    'X-MICROCMS-API-KEY': '2cd222d7e07842e291f7bfae11fe641d559e',
  },
});
</script>

<template>
  <div class="bg-gray-400">
    <div class="grid grid-cols-3 gap-4 py-6 lg:container mx-auto">
      <div class="col-span-2 bg-white rounded-md">
        <div class="px-6 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-10">
          <div class="px-4 md:px-8">
            <h1
              class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6"
            >
              {{ article.title }}
            </h1>

            <div
              class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <p
              class="text-gray-500 sm:text-lg mb-6 md:mb-8"
              v-html="article.content"
            ></p>
          </div>
        </div>
      </div>
      <div class="col-span-1 bg-white rounded-md"></div>
    </div>
  </div>
</template>
