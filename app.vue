<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
    const user = useSupabaseUser();
    onMounted(() => {
      checkAuth();
    });
    const checkAuth = () => {
      // Если пользователь не авторизован, редиректим на страницу аутентификации
      if (!user.value) {
        navigateTo('/auth');
      }
    }
</script>