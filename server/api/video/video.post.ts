import Replicate from "replicate";
import { protectRoute } from '~/server/utils';

const config = useRuntimeConfig();

const replicate = new Replicate({
  auth: config.replicateKey,
});

export default defineEventHandler(async (event) => {
  //TODO: Veryfy abd Get User
  await protectRoute(event);

  const { prompt } = await readBody(event);

  if(!replicate.auth) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Replicate key is not configured'
    })
  }
  if(!prompt) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Prompt is required'
    })
  }

 const model = "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"

  const response = await replicate.run(
    model,
    {
      input: {
        prompt: prompt
      }
    }
  );
  console.log(response);
  return response
})