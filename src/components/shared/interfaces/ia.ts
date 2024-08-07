import { type generateText, LanguageModel, GenerateTextResult } from 'ai';

export type ILanguageModel = LanguageModel;
export type IGenerateText = typeof generateText;
export type IGenerateTextResult = GenerateTextResult<any>;
