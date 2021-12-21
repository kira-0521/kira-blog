<script lang="ts" setup>
type Props = {
  snsLink: string;
  linkClasses: Array<string>;
  imgClasses: Array<string>;
  svgPath: string;
};

const { snsLink, linkClasses, imgClasses, svgPath } = defineProps<Props>();
</script>

<template>
  <a :href="snsLink" target="_blank" :class="linkClasses">
    <svg
      :class="imgClasses"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="svgPath" />
    </svg>
  </a>
</template>
