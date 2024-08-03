import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export const SDK_VERCEL_MODEL_GOOGLE: any = [
  generateText,
  google('models/gemini-1.5-flash-latest'),
];
