<script lang="ts" setup>
type Props = {
  imgSrc: string;
  userName: string;
  text: string;
};

const { imgSrc, userName, text } = defineProps<Props>();
</script>

<template>
  <CardWrapper :classes="['bg-white']">
    <figure class="px-16 lg:px-12 py-8 text-center">
      <img
        :src="imgSrc"
        alt=""
        class="rounded-full w-40 h-40 mx-auto"
        loading="lazy"
      />
      <figcaption>
        <span class="text-gray-700 font-bold text-2xl mt-4 inline-block">{{
          userName
        }}</span>
        <div class="bg-indigo-600 h-1 w-12 mx-auto mt-4 rounded-sm"></div>
        <div class="text-left text-gray-600 mt-6 text-xs">
          <p class="leading-4">
            {{ text }}
          </p>
        </div>
      </figcaption>
      <SnsNav
        :current-classes="['justify-center', 'mt-4', 'hidden', 'lg:flex']"
      />
    </figure>
  </CardWrapper>
</template>
