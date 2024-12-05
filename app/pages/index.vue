<template>
  <main class="relative min-h-screen w-screen overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
    <Features />
    <Story />
    <Contact />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
const count = ref(0);

const increment = () => {
  count.value = count.value + 1;
};

const decrement = () => {
  count.value = count.value - 1;
};
</script>

<style></style>
