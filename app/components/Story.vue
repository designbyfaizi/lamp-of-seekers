<template>
  <section id="story" class="min-h-dvh w-screen bg-black text-blue-50">
    <div class="flex size-full flex-col items-center py-10 pb-24">
      <p class="font-general text-sm uppercase md:text-[10px]">
        The multiversal ip world
      </p>
      <div class="relative size-full">
        <AnimatedTitle
          sectionId="#story"
          title="The st<b>0</b>ry of <br /> a hidden real<b>m</b>"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
        <div class="story-img-container">
          <div class="story-img-mask">
            <div class="story-img-content">
              <img
                src="/img/entrance.webp"
                alt="Entrance"
                class="object-contain"
                ref="frameRef"
              />
            </div>
          </div>
          <RoundedCorners />
        </div>
      </div>
      <div class="-mt-80 flex w-full justify-center -md:mt-64 md:me-44 md:justify-end">
        <div class="flex h-full w-fit flex-col items-center md:items-start">
          <p class="mt-3 max-w-sm text-center font-circular-web text-rose-600-50 md:text-start">
            Where realms converge, lies Zentry and the boundless pillar. Discover its
            secrets and shape your fate amidst infinite opportunities.
          </p>
          <Button id="realm-buttom" containerClass="mt-5">Discover Prologue</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
const frameRef = ref<HTMLImageElement | null>(null);

const {
  elementX: xPos,
  elementY: yPos,
  isOutside,
  elementHeight,
  elementWidth,
  elementPositionX: left,
  elementPositionY: top,
  x: clientX,
  y: clientY,
} = useMouseInElement(frameRef);

watch([xPos, yPos, isOutside], () => {
  const element = frameRef.value;
  if (!element) {
    return;
  }
  if (isOutside.value) {
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
    return;
  }
  const centerX = elementWidth.value / 2;
  const centerY = elementHeight.value / 2;

  const rotateX = ((yPos.value - centerY) / centerY) * -10;
  const rotateY = ((xPos.value - centerX) / centerX) * 10;

  gsap.to(element, {
    duration: 0.3,
    rotateX,
    rotateY,
    transformPerspective: 500,
    ease: "power1.inOut",
  });
});
</script>

<style></style>
