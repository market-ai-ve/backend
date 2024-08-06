import { registerAs } from '@nestjs/config';

const enviroment = process.env.NODE_ENV;

export default registerAs('config', () => ({
  ai: {
    gemini: {
      key: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    },
  },
  enviroment: enviroment,
}));
