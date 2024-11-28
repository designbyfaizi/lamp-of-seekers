// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/fonts"],
  css: ["@unocss/reset/tailwind.css"],
  future: {
    compatibilityVersion: 4,
  },
  devServer: {
    port: 3001,
  },
});