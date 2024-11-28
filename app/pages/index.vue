<template>
    <main class="relative min-h-screen w-screen overflow-x-hidden">
        <!-- <h1 class="text-5xl text-rose-300 font-bold">Welcome to Lamp of Seekers</h1>
        <h1 class="text-5xl text-rose-300 font-bold font-zentry">Welcome to Lamp of Seekers</h1>
        <h1 class="text-5xl text-rose-300 font-bold font-circular-web">Welcome to Lamp of Seekers</h1>
        <h1 class="text-5xl text-rose-300 font-bold font-robert-medium">Welcome to Lamp of Seekers</h1>
        <h1 class="text-5xl text-rose-300 font-bold font-robert-regular">Welcome to Lamp of Seekers</h1> -->
        <Hero />
    </main>
</template>

<script lang="ts" setup>
const count = ref(0)

const increment = () => {
    count.value = count.value + 1
}

const decrement = () => {
    count.value = count.value - 1
}
</script>

<style></style>