<template>
  <UiAvatar v-if="user?.user_metadata.avatar_url">
    <UiAvatarImage :src="user?.user_metadata.avatar_url"></UiAvatarImage>
    <UiAvatarFallback>
      {{ user?.email?.charAt(0).toUpperCase() }}
      {{ user?.email?.charAt(1).toUpperCase() }}
    </UiAvatarFallback>
  </UiAvatar>
  <UiAvatar v-else-if="user?.user_metadata.full_name">
      {{ user?.user_metadata.full_name.split('')[0].charAt(0).toUpperCase() + ' ' + user?.user_metadata.full_name.split('')[0].charAt(0).toUpperCase() }}
  </UiAvatar>
  <UiAvatar v-else>
      {{ user?.email?.charAt(0).toUpperCase() }}
      {{ user?.email?.charAt(1).toUpperCase() }}
  </UiAvatar>
</template>

<script setup lang="ts">
  const user = useSupabaseUser();
</script>

<style scoped>

</style>