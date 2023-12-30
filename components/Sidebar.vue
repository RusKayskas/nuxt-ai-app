<template>
  <aside class="space-y-4 w-full py-4 flex-col flex h-full bg-white shadiw-sm border-r">
    <div class="px-3 py-2 flex-1">
      <NuxtLink class=" flex items-center pl-3 mb-10" to="/">
        <div class="relative h-8 w-8 mr-4">
          <NuxtImg style="height: 100%" src="/logo.svg" />
        </div>
        <h1 class="text-2xl font-bold">AiGenX</h1>
      </NuxtLink>
      <ul class="space-y-1">
        <li v-for="route in DASHBORDLINKS" :key="route.name">
          <NuxtLink 
          :to="route.link"  
          class="text-sm group text-primary flex p-3 justify-start font-medium cursor-pointer rounded-lg transition hover:bg-muted"
          :class="{ 'bg-muted': bgMuted(route.link) }"
          >
          <div class="flex items-center flex-1">
            <Icon :name="route.icon" :class="`h-5 w-5 mr-3 ${route.color}`" />
            <span>{{ route.name }}</span>
          </div>
         </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
  const currentRoute = useRoute();
  console.log('currentRoute.path', currentRoute.path);
  const bgMuted = (link: string) => {
    return currentRoute.path === link;
  }
</script>

<style scoped>

</style>