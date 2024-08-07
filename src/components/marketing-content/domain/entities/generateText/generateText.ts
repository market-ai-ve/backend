import {
  IGenerateText,
  ILanguageModel,
  IGenerateTextResult,
} from '@shared/interfaces/ia';

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response: IGenerateTextResult = await this._generateText({
      model: this._model,
      prompt: this._prompt,
    });
    const { text } = response; // Test: Validar casos de error (No tenemos visible alguno por el momento)
    const replaceText = text.replace(/```json\s*|\s*```/g, ''); // Task: Separar responsabilidad de validacion del texto
    return JSON.parse(replaceText);
  }
}
