import Replicate from "replicate";
import { protectRoute } from '~/server/utils';

const config = useRuntimeConfig();

const replicate = new Replicate({
  auth: config.replicateKey,
});

export default defineEventHandler(async (event) => {
  //TODO: Veryfy abd Get User
  await protectRoute(event);

  const { prompt, amount = 1 , resolution = '256x256' } = await readBody(event);

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

  if(!amount) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Amount is required'
    })
  }

  if(!resolution) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Amount is required'
    })
  }

 const model = "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"

  const response = await replicate.run(
    model,
    {
      input: {
        prompt: prompt,
        num_outputs: amount,
        image_dimensions: resolution
      }
    }
  );
  console.log(amount);
  console.log(response);
  return response
})