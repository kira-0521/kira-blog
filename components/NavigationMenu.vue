<template>
  <!-- nav - start -->
  <nav class="" :class="navClasses">
    <nuxt-link to="/" class="transition duration-100" :class="linkClasses"
      >Home</nuxt-link
    >
  </nav>
  <!-- nav - end -->
</template>

<script lang="ts">
export default {
  props: {
    navClasses: {
      type: Array,
      required: true,
    },
    linkClasses: {
      type: Array,
      required: true,
    },
  },
};
</script>
