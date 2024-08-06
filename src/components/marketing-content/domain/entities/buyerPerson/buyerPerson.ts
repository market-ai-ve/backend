import { BuyerPersonData } from './../../valueObjects';

export class GenerateText {
  private readonly generateText: (
    model,
    prompt: string,
    option: object,
  ) => Promise<object>;
  private readonly model;
  private readonly prompt: string;
  private readonly option: object = {};

  constructor(generateText, model, prompt, option) {
    this.generateText = generateText;
    this.model = model;
    this.prompt = prompt;
    this.option = option;
  }

  async generate(): Promise<object> {
    return await this.generateText(this.model, this.prompt, this.option);
  }
}

export class BuyerPerson {
  private _buyerPerson: BuyerPersonData;
  private _value: object;

  constructor(buyerPerson: BuyerPersonData) {
    this._buyerPerson = buyerPerson;
  }

  // Getters
  get buyerPerson() {
    return this._buyerPerson;
  }

  get value() {
    return this._value;
  }

  public async create(func, model, prompt, option): Promise<void> {
    const generateText = new GenerateText(func, model, prompt, option);
    await generateText
      .generate()
      .then((buyerPerson) => (this._value = buyerPerson))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
