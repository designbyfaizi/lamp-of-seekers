import type { RuntimeValue } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/fonts", "@nuxt/icon", "@vueuse/nuxt"],
  css: ["@unocss/reset/tailwind.css", "~/assets/css/index.css"],
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    public: {
      // @ts-ignore
      isLoading: (process.env.IS_LOADING as unknown) as boolean,
      // @ts-ignore
      autoplay: (process.env.AUTOPLAY as unknown) as boolean
    },
  },
  devServer: {
    port: 3001,
  },
});