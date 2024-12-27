<template>
  <div
    ref="navContainerRef"
    class="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 rounded-lg"
  >
    <header class="absolute top-1/2 w-full -translate-y-1/2">
      <nav class="flex size-full items-center justify-between p-4">
        <div class="flex items-center gap-7">
          <img src="/img/logo.png" alt="logo" class="w-10" />

          <Button
            id="product-button"
            right-icon="tabler:location-filled"
            container-class="!bg-blue-50 !md:flex !hidden !items-center !justify-center !gap-1"
          >
            Products
          </Button>
        </div>
        <div class="flex h-full items-center">
          <div class="hidden md:block dark">
            <NuxtLink
              v-for="item in navItems"
              :key="item"
              :to="`#${item.toLowerCase()}`"
              class="nav-hover-btn"
            >
              {{ item }}
            </NuxtLink>
          </div>
          <button
            class="ml-10 flex items-center space-x-0.5"
            @click="toggleAudioIndicator"
          >
            <audio ref="audioElementRef" class="hidden" src="/audio/loop.mp3" loop />
            <div
              v-for="bar in [1, 2, 3, 4]"
              :key="bar"
              :class="['indicator-line', isIndicatorActive ? 'active' : '']"
              :style="{ animationDelay: `${bar * 0.1}s` }"
            />
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
const navContainerRef = ref<HTMLElement | null>(null);
const audioElementRef = ref<HTMLAudioElement | null>(null);
const isAudioPlaying = ref(false);
const isIndicatorActive = ref(false);
const lastScrollY = ref(0);
const isNavVisible = ref(true)

const {y: currentScrollY} = useWindowScroll()

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const toggleAudioIndicator = () => {
  isAudioPlaying.value = !isAudioPlaying.value;
  isIndicatorActive.value = !isIndicatorActive.value;
};

watch(isAudioPlaying, () => {
  if (isAudioPlaying.value) {
    return audioElementRef.value?.play();
  }
  audioElementRef.value?.pause();
});

watch([currentScrollY], () => {
  // if user is at the top of the page
  if(currentScrollY.value === 0){
    isNavVisible.value = true;
    navContainerRef.value?.classList.remove('floating-nav')
  }
  // if user is scrolling down
  else if(currentScrollY.value > lastScrollY.value){
    isNavVisible.value = false;
    navContainerRef.value?.classList.add("floating-nav")
  }
  // if user is scrolling up
  else if(currentScrollY.value < lastScrollY.value){
    isNavVisible.value = true;
    navContainerRef.value?.classList.add("floating-nav")
  }

  lastScrollY.value = currentScrollY.value
})

watch(isNavVisible, () => {
  gsap.to(navContainerRef.value, {
    y: isNavVisible.value ? 0 : -100,
    opacity: isNavVisible.value ? 1 : 0,
    duration: 0.2
  })
})
</script>

<style></style>
