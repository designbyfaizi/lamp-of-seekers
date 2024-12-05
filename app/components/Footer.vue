<template>
  <footer class="w-screen bg-rose-600 py-4 text-black">
    <div
      class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row"
    >
      <p class="text-center text-sm font-light md:text-left">
        &copy; Nova 2024. All rights reserved
      </p>
      <div class="flex justify-center gap-4 md:justify-start">
        <NuxtLink
          v-for="link in links"
          :key="link.icon"
          target="_blank"
          rel="noopener"
          :to="link.href"
          class="text-black transition-colors duration-100 ease-in-out hover:text-white"
        >
          <Icon :name="link.icon" class="size-4" />
        </NuxtLink>
      </div>
      <NuxtLink
        to="#privacy-policy"
        class="text-center text-sm hover:underline md:text-right"
      >
        Privacy Policy
      </NuxtLink>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const links = [
  {
    href: "https://discord.com",
    icon: "tabler:brand-discord-filled",
  },
  {
    href: "https://x.com",
    icon: "tabler:brand-twitter-filled",
  },
  {
    href: "https://github.com",
    icon: "tabler:brand-github",
  },
  {
    href: "https://twitch.com",
    icon: "tabler:brand-twitch",
  },
];
</script>

<style></style>
