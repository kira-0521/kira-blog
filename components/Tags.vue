<script lang="ts" setup>
import { Tag } from '../composables/types/api/microcmsResponse';

type Props = {
  tags: Array<Tag>;
  ulClasses?: Array<string>;
  // liClasses: Array<string>;
  // linkClasses: Array<string>;
  // tagClasses: Array<string>;
};

const {
  tags,
  ulClasses,
  // liClasses,
  // linkClasses,
  // tagClasses,
} = defineProps<Props>();
</script>

<template>
  <ul class="flex text-gray-500 text-sm" :class="ulClasses">
    <li v-for="tag in tags" class="ml-2 first:ml-0">
      <nuxt-link
        :to="`/${tag.id}`"
        class="w-full h-full flex items-center hover:text-pink-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
        <i>{{ tag.name }}</i>
      </nuxt-link>
    </li>
  </ul>
</template>
