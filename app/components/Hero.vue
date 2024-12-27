<template>
  <div class="relative h-dvh w-screen overflow-x-hidden">
    <div
      v-if="isLoading"
      class="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-rose-100/50 backdrop-blur-xl"
    >
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </div>
    <div
      id="video-frame"
      class="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
    >
      <div>
        <div
          class="absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
        >
          <div
            @click="handleMiniVideoClick"
            class="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <img
              :src="getImageSrc(upcomingVideoIndex)"
              @loadeddata="handleVideoLoad"
              ref="nextVideoRef"
              id="current-video"
              class="size-64 origin-center scale-150 object-cover object-center"
            />
            <!-- <video
              preload="auto"
              class="size-64 origin-center scale-150 object-cover object-center"
              @loadeddata="handleVideoLoad"
              ref="nextVideoRef"
              :src="getVideoSrc(upcomingVideoIndex)"
              loop
              muted
              id="current-video"
            /> -->
          </div>
        </div>
        <img
          :src="getImageSrc(currentIndex)"
          @loadeddata="handleVideoLoad"
          ref="nextVideoRef"
          id="next-video"
          class="absolute-center invisible z-20 size-64 object-cover object-center"
        />
        <img
          :src="getImageSrc(currentIndex)"
          @loadeddata="handleVideoLoad"
          ref="nextVideoRef"
          id="next-video"
          class="absolute left-0 top-0 size-full object-cover object-center"
        />
        <!-- <video
          ref="nextVideoRef"
          :src="getVideoSrc(currentIndex)"
          :autoplay="false"
          loop
          muted
          id="next-video"
          class="absolute-center invisible z-20 size-64 object-cover object-center"
          preload="auto"
          @loadeddata="handleVideoLoad"
        /> -->
        <!-- <video
          :src="getVideoSrc(currentIndex)"
          :autoplay="false"
          loop
          muted
          class="absolute left-0 top-0 size-full object-cover object-center"
          preload="auto"
          @loadeddata="handleVideoLoad"
        ></video> -->
      </div>
      <h1 class="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        G<b>a</b>ming
      </h1>
      <div class="absolute left-0 top-0 z-40 size-full">
        <div class="mt-24 px-5 sm:px-10">
          <h1 class="special-font hero-heading text-blue-100">Redefi<b>n</b>e</h1>
          <p class="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br />
            Unleash the Play Economy
          </p>
          <Button
            id="watch-trailer"
            leftIcon="tabler:location-filled"
            containerClass="!bg-rose-600 flex-center gap-1"
          >
            Watch Trailer
          </Button>
        </div>
      </div>
    </div>
    <h1 class="special-font hero-heading absolute bottom-5 right-5 text-black">
      G<b>a</b>ming
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const config = useRuntimeConfig();
const _isLoading = !(config.public.isLoading as unknown)

console.log({_isLoading: _isLoading})

const currentIndex = ref(1);
const hasClicked = ref(false);
const isLoading = ref(_isLoading);
console.log({isLoading: isLoading.value})
const loadedVideos = ref(0);

const totalVideos = 3;

const nextVideoRef = ref<HTMLVideoElement | null>(null);

const handleVideoLoad = () => {
  loadedVideos.value = loadedVideos.value + 1;
};

const setIsLoading = () => {
  if (loadedVideos.value > 0) {
    isLoading.value = false;
  }
};

onMounted(() => {
  setIsLoading();
});

watch(loadedVideos, () => {
  setIsLoading();
});

const upcomingVideoIndex = computed(() => (currentIndex.value % totalVideos) + 1);

const handleMiniVideoClick = () => {
  hasClicked.value = true;
  currentIndex.value = upcomingVideoIndex.value;
};

useGSAP(
  () => {
    if (hasClicked.value) {
      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => {
          nextVideoRef.value?.play();
        },
      });

      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  },
  {
    dependencies: [currentIndex],
    revertOnUpdate: true,
  }
);

useGSAP(() => {
  gsap.set("#video-frame", {
    clipPath: "polygon(14% 0%, 72% 0%, 88% 90%, 0% 95%)",
    borderRadius: "0 0 40% 10%",
  });

  gsap.from("#video-frame", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    borderRadius: "0% 0% 0% 0%",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#video-frame",
      start: "center center",
      end: "bottom center",
      scrub: true,
    },
  });
}, {});

const getVideoSrc = (index: number) => {
  return `videos/hero-${index}.mp4`;
};

const getImageSrc = (index: number) => {
  return `img/${index}.webp`;
};
</script>

<style></style>
