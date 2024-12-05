<template>
  <div ref="itemRef" :style="{transform: transformStyle}">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const itemRef = ref(null);
const transformStyle = ref("");

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(itemRef);

watch([elementX, elementY, isOutside], () => {
    if (isOutside.value) {
        return transformStyle.value = "";
    }
    const MAX_ROTATION = 5;

    const relativeX = elementX.value / elementWidth.value;
    const relativeY = elementY.value / elementHeight.value;

    const tiltX = (relativeY * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)
    const tiltY = (MAX_ROTATION / 2 - relativeX * MAX_ROTATION).toFixed(2)

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

    transformStyle.value = newTransform
})
</script>

<style></style>
