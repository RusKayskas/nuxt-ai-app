// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
  '@nuxtjs/tailwindcss', 
  'shadcn-nuxt', 
  '@nuxtjs/supabase', 
  '@nuxt/image', 
  'nuxt-icon'
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  components: [
    {
      path: '~/components/',
      extensions: ['.vue'],
      prefix: ''
    },
    {
      path: '~/components/shared',
      extensions: ['.vue'],
      prefix: 'Ui'
    }
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'],
    }
  },
  runtimeConfig: {
    openaiKey: ''
  }
})