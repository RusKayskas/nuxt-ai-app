<template>
  <div>
    <!--Heading-->
    <UiHeading
      title="Image Generation" 
      description="Turn you prompt into an image."
      icon="lucide:image"
      iconColor="text-pink-700"
      bgColor="text-pink-700/10"
    />
    <div class="px-4 lg:px08">
      <div>
        <form 
          @submit.prevent="submitForm"
          class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div class="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <div class="m-0 p-0">
              <input 
                type="text"
                v-model="inputPrompt"
                placeholder="How do i calculate the radius of a circle?"
                class="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full"
              >
            </div>

          </div>
          <div class="col-span-12 lg:col-span-2">
            <UiSelect v-model="resolutinSelect">
              <UiSelectTrigger>
                <UiSelectValue placeholder="Select a fruit" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectItem v-for="(res, index) in IMAGERESOLUTINOPTIONS" :key="index" :value="res.value">
                    {{ res.text }}
                  </UiSelectItem>
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>
          </div>

          <div class="col-span-12 lg:col-span-2">
            <UiSelect v-model="amountSelect">
              <UiSelectTrigger>
                <UiSelectValue placeholder="Select a fruit" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectItem v-for="(item, index) in IMAGEAMOUNTOPTIONS" :key="index" :value="item.value">
                    {{ item.text }}
                  </UiSelectItem>
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>
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
        <UiEmpty v-if="!photos.length && !isLoading && !messageError" label="No conversation started." />

        <div class="flex flex-col-reverse gap-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            <div 
            v-for="photo in photos"
            :key="photo"
            class="rounded-lg overflow-hidden border border-black/5 flex justify-center items-center"
          >
            <div class="relative aspect-square">
              <img :src="photo" alt="image" />
            </div>
            <div class="-2">
              <NuxtLink target="_blank"
                :to="photo"
                download
                class="w-full bg-slate-200 flex justify-center px-1 py-2 items-center"
              >
                Download
              </NuxtLink>
            </div>
          </div>
          </div>

          <p v-if="messageError && !isLoading && photos" class="p-8 rounded-lg flex flex-col items-center justify-center bg-muted text-red-500 text-bold" >
            <Icon name="emojione-monotone:crying-cat-face" size="50" />
            {{ messageError }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IMAGERESOLUTINOPTIONS } from '~/utils/image.data';
  import { IMAGEAMOUNTOPTIONS } from '~/utils/image.data';
  const inputPrompt = ref<string>('');
  const isLoading = ref<boolean>(false);
  const resolutinSelect = ref<string>('256x256');
  const amountSelect = ref<string>('1');
  const photos = ref<string[]>([]);
  const messageError: Ref<string> = ref('');
  const submitForm = async() => {
    isLoading.value = true;

    const { data, error} = await useFetch('/api/image/openai.posts', {
      method: 'POST',
      body: {
        prompt: inputPrompt.value,
        amount: amountSelect.value,
        resolution: resolutinSelect.value
      }
    });
    if(data.value) {
      photos.value = data.value.map((img) => {
        if(img.url) {
          return img.url
        }
        return ''
      })
    }

    if(error.value) {
      // console.log('[ConversationError]', error.value.statusMessage);
      //Todo: Check error type
      messageError.value = 'Something went wrong';
    }
    inputPrompt.value = '';
    isLoading.value = false;
  }

</script>

<style scoped>

</style>