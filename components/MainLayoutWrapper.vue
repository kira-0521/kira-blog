<script lang="ts" setup>
type Props = {
  mainClasses: Array<string>;
  innerClasses: Array<string>;
};

const { mainClasses, innerClasses } = defineProps<Props>();
</script>

<template>
  <main class="pb-6 sm:pb-8 lg:pb-12" :class="mainClasses">
    <div class="max-w-screen-xl mx-auto" :class="innerClasses">
      <slot />
    </div>
  </main>
</template>
