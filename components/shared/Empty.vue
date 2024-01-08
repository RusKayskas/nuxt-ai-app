<template>
  <div class="h-full p-20 flex flex-col items-center justify-center">
    <div class="relative h-52 w-52 flex flex-col items-center">
      <NuxtImg src="/empty.png" alt=""/>
      <p class="text text=muted-foreground text-sm text-center">
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    label: string
  }>();
</script>

<style scoped>

</style>