<template>
  <div>
    <!--Heading-->
    <UiHeading
      title="Video generation" 
      description="Turn your prompt into video."
      icon="lucide:video"
      iconColor="text-orange-500"
      bgColor="text-orange-500/10"
    />
    <div class="px-4 lg:px08">
      <div>
        <form 
          @submit.prevent="submitForm"
          class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div class="col-span-12 lg:col-span-10 flex flex-col justify-center">
            <div class="m-0 p-0">
              <input 
                type="text"
                v-model="inputPrompt"
                placeholder="Inter your prompt"
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
      <div class="space-y-4 mt-4">
        <div 
          v-if="isLoading"
          class="p-8 rounded-lg flex items-center justify-center bg-muted">
          <UiLoader />
        </div>
        <UiEmpty v-if="!video && !isLoading && !messageError" label="No video generation." />

        <div class="flex flex-col-reverse gap-y-4">
          <!-- <audio v-if="video" controls class="w-full mt-8">
            <source :src="video" />
          </audio> -->
          <video v-if="video" controls class="w-full mt-8 rounded-lg border bg-black">
            <source :src="video">
          </video>
          <p v-if="messageError && !isLoading && !video" class="p-8 rounded-lg flex flex-col items-center justify-center bg-muted text-red-500 text-bold" >
            <Icon name="emojione-monotone:crying-cat-face" size="50" />
            {{ messageError }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const inputPrompt: Ref<string> = ref('');
  const isLoading: Ref<boolean> = ref(false);
  const video = ref<string>();
  const messageError: Ref<string> = ref('');
  const submitForm = async() => {
    isLoading.value = true;
    
    
    const { data, error} = await useFetch<string[]>('/api/video', {
      method: 'POST',
      body: {
        prompt: inputPrompt.value
      }
    });
    if(data.value) {
      video.value = data.value[0];
      messageError.value = '';
    }

    if(error.value) {
      // console.log('[ConversationError]', error.value.statusMessage);
      //Todo: Check error type
      messageError.value = 'Something went wrong';
    }
    isLoading.value = false;
    inputPrompt.value = '';
  }

</script>

<style scoped>

</style>