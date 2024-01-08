<template>
  <div class="h-full flex flex-col gap-y-4 items-center justify-center">
    <div class="w-8 h-8 relative animate-spin">
      <NuxtImg class="w-full" src="/logo.svg" alt="logo" />
    </div>
    <p 
        v-if="processing"
        class="text-sm text-muted-foreground"
      >
        AiGenX is processing...
      </p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    processing?: boolean
  }
  withDefaults(
    defineProps<Props>(), {
      processing: true,
    }
  )
</script>

<style scoped>

</style>