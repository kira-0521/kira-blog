<script lang="ts">
export default {
  props: {
    snsLink: {
      type: String,
      required: true,
    },
    linkClasses: {
      type: Array as () => string[],
    },
    imgClasses: {
      type: Array as () => string[],
    },
    svgPath: {
      type: String,
      required: true,
    },
  },
};
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
