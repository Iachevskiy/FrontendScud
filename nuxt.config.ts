// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['@/src/1_App/Styles/Main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/src/1_App/Styles/share.scss";'
        }
      }
    }
  },
  vue: {

  },
  typescript: {
    typeCheck: true
  }
});
