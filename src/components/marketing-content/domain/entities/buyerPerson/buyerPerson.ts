import {
  IGenerateText,
  ILanguageModel,
} from '@/components/shared/interfaces/ia';

import { BuyerPersonData } from './../../valueObjects';
import { GenerateText } from '../generateText';

export class EntityBuyerPerson {
  private _buyerPerson: BuyerPersonData;
  private _value: object = {};
  generateText: GenerateText;

  constructor(buyerPerson: BuyerPersonData) {
    this._buyerPerson = buyerPerson;
    this._buyerPerson.validate(this._buyerPerson);

    this.generateText = new GenerateText();
  }

  // Getters
  get buyerPerson() {
    return this._buyerPerson;
  }

  get value() {
    return this._value;
  }

  public async create(
    func: IGenerateText,
    model: ILanguageModel,
    prompt: string,
  ): Promise<void> {
    const generateText = this.generateText;
    // Set data to use in generateText class
    generateText.generateTextFunc = func;
    generateText.model = model;
    generateText.prompt = prompt;

    await generateText
      .generate()
      .then((buyerPerson) => (this._value = buyerPerson))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
