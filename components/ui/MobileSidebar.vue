<template>
  <div>
    <UiSheet>
      <UiSheetTrigger>
        <UiButton variant="outline" class="md:hidden pr-4 hover:opacity-75 transition">
          <Icon name="lucide:menu" />
        </UiButton>
      </UiSheetTrigger>
      <UiSheetContent side="left" class="p-0 bg-white">
        <Sidebar />
      </UiSheetContent>
    </UiSheet>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>