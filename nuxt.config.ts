// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
  '@nuxtjs/tailwindcss', 
  'shadcn-nuxt', 
  '@nuxtjs/supabase', 
  '@nuxt/image',
  [
    '@nuxtjs/google-fonts', 
    {
      families: {
        Montserrat: {
          wght: [300, 400, 500, 700],
          ital: [300], 
        },
      },
    },
  ], 
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