import OpenAI from 'openai';
import { protectRoute } from '~/server/utils';

const config = useRuntimeConfig();

const openai = new OpenAI({
  apiKey: config.openaiKey
});

const instruction = {
  role: 'system',
  content: 'You are a code generator'
}

export default defineEventHandler(async (event) => {
  //TODO: Veryfy abd Get User
  await protectRoute(event);

  const { messages } = await readBody(event);

  if(!openai.apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'OpenAi key not configured'
    })
  }
  if(!messages) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Messages are required'
    })
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [ instruction, ...messages ]
  })
  return response.choices[0].message
})