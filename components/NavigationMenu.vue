<script lang="ts" setup>
type Props = {
  navClasses: Array<string>;
  linkClasses: Array<string>;
};

const { navClasses, linkClasses } = defineProps<Props>();
</script>

<template>
  <nav :class="navClasses">
    <nuxt-link to="/" class="transition duration-100" :class="linkClasses"
      >Home</nuxt-link
    >
  </nav>
</template>
