import { H3Event } from 'h3';
import { serverSupabaseUser } from '#supabase/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const MAX_COUNT = 5;
export const protectRoute = async (event: H3Event) => {
  const user = await serverSupabaseUser(event);
  if(!user) {
    throw createError({
      statusMessage: 'Unauthorized',
      statusCode: 401
    })
  }
  event.context.user = user
}

export const incrementApiLimit = async (userId: string) => {
  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId: userId
    }
  })

  if(userApiLimit) {
    await prisma.userApiLimit.update({
      where: {
        userId
      },
      data: {
        count: userApiLimit.count + 1
      }
    })
  } else {
    await prisma.userApiLimit.create({
      data: {
        userId,
        count: 1
      }
    })
  }
}

export const getApiLimitCount = async (userId: string) => {
  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId: userId
    }
  })

  if(!userApiLimit || userApiLimit.count <= 5) {
    return 0 
  } else {
    return userApiLimit.count
  }
  // (!userApiLimit || userApiLimit.count <= MAX_COUNT) ? return 0 : return userApiLimit.count
}