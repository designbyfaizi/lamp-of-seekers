<template>
  <button
    :class="[
      'group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-rose-50 px-7 py-3 text-black',
      containerClass,
      'flex items-center gap-2',
    ]"
  >
    <Icon v-if="leftIcon" :name="leftIcon" class="size-3 aspect-square" />
    <span class="relative inline-flex overflow-hidden font-general text-xs uppercase">
      <div
        class="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12"
      >
        <slot />
      </div>
      <div
        class="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
      >
        <slot />
      </div>
    </span>
    <Icon v-if="rightIcon" :name="rightIcon" class="" />
  </button>
</template>

<script lang="ts" setup>
type Props = {
  leftIcon?: string;
  rightIcon?: string;
  containerClass?: string;
};
const props = defineProps<Props>();
</script>

<style></style>
