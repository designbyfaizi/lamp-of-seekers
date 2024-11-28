<template>
    <div class="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" class="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div
                    class="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div @click="handleMiniVideoClick" class="origin-center">
                        <video ref="nextVideoRef" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
const currentIndex = ref(1);
const hasClicked = ref(false);
const isLoading = ref(true);
const loadedVideos = ref(0);

const totalVideos = 4;

const nextVideoRef = ref(null);

const handleMiniVideoClick = () => {
    hasClicked.value = true;
    currentIndex.value = currentIndex.value + 1
}

const getVideoSource = (index: number) => {
    return `videos/hero-${index}.mp4`
}
</script>

<style></style>