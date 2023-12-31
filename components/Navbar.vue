<template>
  <div class="flex items-center p-4">
    <!--mobileSidebar-->
    <MobileSidebar />
    <div class="flex w-full justify-end">
      <!--dropdownMenu-->
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="outline">
            <Icon name="lucide:circle-user" />
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end" class="w-72 left-[100px]">
          <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <div class="w-full flex items-center p-2 pl-3">
            <UiAvatar class="mr-3">
              <UiAvatarImage v-if="user?.user_metadata.avatar_url" :src="user.user_metadata.avatar_url"></UiAvatarImage>
              <UiAvatarFallback>
                {{ user?.email?.charAt(0).toUpperCase() }}
                {{ user?.email?.charAt(1).toUpperCase() }}
              </UiAvatarFallback>
            </UiAvatar>
            <div>
              <div class="font-bold">
                {{ user?.user_metadata.full_name }}
              </div>
              <div class="text-sm">
                {{ user?.email }}
              </div>
            </div>
          </div>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="cursor-pointer" @click="logOut">
            <Icon class="mr-2 h-4 w-4" name="heroicons:arrow-left-on-rectangle" />
            <span class="ml-2">
              LogOut
            </span>
          </UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import MobileSidebar from './ui/MobileSidebar.vue';

  const user = useSupabaseUser();
  const supabaseClient = useSupabaseClient();
  const logOut = async () => {
    await supabaseClient.auth.signOut();
    navigateTo('/auth');
  }
</script>

<style scoped>

</style>