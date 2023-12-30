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
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'],
    }
  }
})