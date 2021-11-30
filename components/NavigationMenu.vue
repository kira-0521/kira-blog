<script lang="ts">
export default {
  props: {
    navClasses: {
      type: Array as () => string[],
      required: true,
    },
    linkClasses: {
      type: Array as () => string[],
      required: true,
    },
  },
};
</script>

<template>
  <nav :class="navClasses">
    <nuxt-link to="/" class="transition duration-100" :class="linkClasses"
      >Home</nuxt-link
    >
  </nav>
</template>
