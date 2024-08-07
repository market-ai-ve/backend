import { IGenerateText, ILanguageModel } from "@shared/interfaces/ia";

export class GenerateText {
  private _generateText!: IGenerateText;
  private _model!: ILanguageModel;
  private _prompt!: string;

  constructor() {}

  // Setters
  set generateTextFunc(generateText: IGenerateText) {
    this._generateText = generateText;
  }

  set model(model: ILanguageModel) {
    this._model = model;
  }

  set prompt(prompt: string) {
    this._prompt = prompt;
  }


  async generate(): Promise<object> {
    // @ts-ignore
    const { text } = await this._generateText({
      model: this._model,
      prompt: this._prompt,
    });
    const replaceText = text.replace(/```json\s*|\s*```/g, '');
    return JSON.parse(replaceText);
  }
}