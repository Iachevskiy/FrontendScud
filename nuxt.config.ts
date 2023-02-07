// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
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
  },
  modules: [
    'nuxt-icons',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.spacex.land/graphql'
      }
    }
  }
});
