<template>
  <div class="relative size-full text-white">
    <video
      :src="src"
      loop
      muted
      :autoplay="false"
      class="absolute left-0 top-0 size-full object-cover object-center"
    ></video>
    <div class="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
      <div>
        <h1 class="bento-title special-font" v-html="title"></h1>
        <p v-if="description" class="mt-3 max-w-64 text-xs md:text-base">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  src: string;
  title: string;
  description: string;
};
const props = defineProps<Props>();
const {
  public: { autoplay },
} = useRuntimeConfig();
</script>

<style></style>
