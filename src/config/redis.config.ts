import { createClient } from "redis"


export const initRedis = () => {
  const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD!,
    socket: {
      host: process.env.REDIS_HOST!,
      port: Number(process.env.REDIS_PORT!)
    }
  });
  redisClient.on('error', (err) => console.error('Redis Client Error', err));

  redisClient.connect();
  return redisClient;
}

export const initSubscriberRedis = () => {
  const subClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD!,
    socket: {
      host: process.env.REDIS_HOST!,
      port: Number(process.env.REDIS_PORT!)
    }
  });

  subClient.on('error', (err) => console.error('Redis Subscriber Error', err));

  subClient.connect();
  return subClient;
}
