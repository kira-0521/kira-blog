<script lang="ts" setup>
type Props = {
  classes: Array<string>;
};

const { classes } = defineProps<Props>();
</script>

<template>
  <div class="rounded-md shadow" :class="classes">
    <slot></slot>
  </div>
</template>
