<template>
  <div>
    <!--Heading-->
    <UiHeading
      title="Code Generation" 
      description="Generate code using description text."
      icon="lucide:code"
      iconColor="text-green-500"
      bgColor="text-green-500/10"
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
      <div class="space-y-4 mt-4">
        <div 
          v-if="isLoading"
          class="p-8 rounded-lg flex items-center justify-center bg-muted">
          <UiLoader />
        </div>
        <UiEmpty v-if="!messages.length && !isLoading && !messageError" label="No conversation started." />

        <div class="flex flex-col-reverse gap-y-4">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="`p-8 w-full rounded-lg flex items-center gap-x-3 ${
             message.role === 'user' ? 'bg-white border border-black' : 'bg-slate-20' 
            }`"
          > 
            <UiUserAvatar v-if="message.role === 'user'" />
            <UiBotAvatar v-else />
            <p 
              v-if="message.content" 
              v-html="$mdRenderer.render(message.content)"
              class="prose-pre:overflow-auto prose-pre:w-full prose-pre:my-2 prose-pre:bg-black/10 prose-pre:p-2 prose-pre:rounded-lg"
            >
            </p>
          </div>
          <p v-if="messageError && !isLoading && messages" class="p-8 rounded-lg flex flex-col items-center justify-center bg-muted text-red-500 text-bold" >
            <Icon name="emojione-monotone:crying-cat-face" size="50" />
            {{ messageError }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TChatCompletionRequestMessage } from '~/types/conversation.types';
  const inputPrompt: Ref<string> = ref('');
  const isLoading: Ref<boolean> = ref(false);
  const messages: Ref<TChatCompletionRequestMessage[]> = ref([]);
  const messageError: Ref<string> = ref('');
  const { $mdRenderer } = useNuxtApp();
  const submitForm = async() => {
    isLoading.value = true;
    const userMessage: TChatCompletionRequestMessage = {
      role: 'user',
      content: inputPrompt.value
    }
    const newMessages = [...messages.value, userMessage];
    const { data, error} = await useFetch('/api/code', {
      method: 'POST',
      body: {
        messages: newMessages
      }
    });
    if(data.value) {
      messages.value = [
        ...messages.value,
        userMessage,
        {
          role: 'assistant',
          content: data.value.content as string,
        }

      ]
    }

    if(error.value) {
      // console.log('[ConversationError]', error.value.statusMessage);
      //Todo: Check error type
      messageError.value = 'Something went wrong';
    }
    isLoading.value = false;
  }

</script>

<style scoped>

</style>