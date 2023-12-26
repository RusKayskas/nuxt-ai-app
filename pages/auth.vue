<template>
  <Auth
    :supabaseClient="supabaseClient"
    :appearance="{
      theme: ThemeSupa
    }"
    redirectTo="/"
    :providers="['google']"
  />
</template>

<script setup lang="ts">
  // Import predefined theme
  import { ThemeSupa } from '@supabase/auth-ui-shared';
  import { Auth } from '@nuxtbase/auth-ui-vue';

  const supabaseClient = useSupabaseClient();
  
  definePageMeta({
    layouts: 'lAuth'
  });
</script>