<script setup lang="ts">
  import { ThemeSupa } from '@supabase/auth-ui-shared';
  import { Auth } from '@nuxtbase/auth-ui-vue';

  const supabaseClient = useSupabaseClient();
  
  definePageMeta({
    layout: 'l-auth'
  });
</script>
<template>
  <div class="w-full min-h-screen flex items-center">

    <div class="max-w-[800px] w-full mx-auto">

      <UiCard>
        <UiCardTitle>
          <div class="text-center py-4">Welcome</div>
        </UiCardTitle>
        <UiCardContent>
          <Auth
            :supabaseClient="supabaseClient"
            :appearance="{
              theme: ThemeSupa
            }"
            redirectTo="/"
            :providers="['google']"
          />
        </UiCardContent>
      </UiCard>

    </div>

  </div>
</template>