<template>
  <div>
    <!--Heading-->
    <UiHeading
      title="conversation" 
      description="Our most advanced conversation model."
      icon="lucide:message-square"
      iconColor="text-violet-500"
      bgColor="text-violet-500/10"
    />
    <div class="px-4 lg:px08">
      <div>
        <form 
          action=""
          class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div class="col-span-12 lg:col-span-10">
            <div class="m-0 p-0">
              <input 
                type="text"
                v-model="inputPrompt"
                placeholder="How do i calculate the radius of a circle?"
                class="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full"
              >
            </div>

          </div>
          <UiButton 
            class="col-span-12 lg:col-span-2"
            type="submit"
            :disabled="!inputPrompt || isLoading"
          >
            Generate
          </UiButton>
        </form>
      </div>
    </div>
    <!--Loader-->

    <!--empty-->

    <!--BotAvatar-->

    <!--USerAvatar-->
  </div>
</template>

<script setup lang="ts">
  const inputPrompt: Ref<string> = ref('');
  const isLoading: Ref<boolean> = ref(false);
</script>

<style scoped>

</style>