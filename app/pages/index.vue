<template>
    <main>
        <h1 class="text-5xl text-orange-500 font-bold">Welcome to Lamp of Seekers</h1>
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