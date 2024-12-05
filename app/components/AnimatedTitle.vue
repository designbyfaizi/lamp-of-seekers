<template>
  <div ref="containerRef" :class="['animated-title', containerClass]">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
    >
      <span
        v-for="(word, i) in line.split(' ')"
        :key="i"
        class="animated-word"
        v-html="word"
      >
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
type Props = {
  title: string;
  containerClass?: string;
};

const props = defineProps<Props>();

const lines = computed(() => {
  return props.title.split("<br />");
});

const containerRef = ref<HTMLElement | null>(null);
const ctx = ref<gsap.Context | null>(null)

onMounted(() => {
  ctx.value = gsap.context(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease:"power2.inOut",
        stagger:0.02
    }, 0)
    // @ts-ignore
  }, containerRef.value);

  console.log(ctx.value)
});

onUnmounted(() => {
    ctx.value?.revert()
})
</script>

<style></style>
