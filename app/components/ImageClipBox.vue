<template>
  <div :class="clipClass">
    <img :src="src" alt="" />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  src: string;
  clipClass?: string;
};
const props = defineProps<Props>();
</script>

<style></style>
