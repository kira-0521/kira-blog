<script lang="ts" setup>
import { Stringifier } from 'postcss';
import FooterLayout1 from '~~/components/FooterLayout.vue';

interface ResData {
  id: number;
  name: string;
  email: string;
}

const { data } = await useFetch<string, ResData>('/users/1', {
  pick: ['id', 'name', 'email'],
  baseURL: 'https://jsonplaceholder.typicode.com',
});
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

        <div
          class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8"
        >
          <!-- article - start -->
          <div
            class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden"
          >
            <a
              href="#"
              class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start flex-shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
              />
            </a>

            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <span class="text-gray-400 text-sm">July 19, 2021</span>

              <h2 class="text-gray-800 text-xl font-bold">
                <a
                  href="#"
                  class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >New trends in Tech</a
                >
              </h2>

              <p class="text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>

              <div>
                <a
                  href="#"
                  class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >Read more</a
                >
              </div>
            </div>
          </div>
          <!-- article - end -->
        </div>
      </main>
      <FooterLayout />
    </div>
  </div>
</template>
