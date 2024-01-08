<template>
  <UiAvatar>
    <UiAvatarImage src="/logo.svg"></UiAvatarImage>
  </UiAvatar>
</template>

<script setup lang="ts">
  const user = useSupabaseUser();
</script>

<style scoped>

</style>