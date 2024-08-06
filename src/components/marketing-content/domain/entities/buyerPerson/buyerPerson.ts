import { BuyerPersonData } from './../../valueObjects';

export class GenerateText {
  private readonly generateText: (
    model: any,
    prompt: string,
    option?: object,
  ) => Promise<object>;
  private readonly model;
  private readonly prompt: string;
  private readonly option: object = {};

  constructor(
    generateText: (
      model: any,
      prompt: string,
      option?: object,
    ) => Promise<object>,
    model: any,
    prompt: string,
    option: object,
  ) {
    this.generateText = generateText;
    this.model = model;
    this.prompt = prompt;
    this.option = option;
  }

  async generate(): Promise<object> {
    const result = await this.generateText(this.model, this.prompt);
    return result;
  }
}

export class BuyerPerson {
  private _buyerPerson: BuyerPersonData;
  private _value: object = {};

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

  public async create(
    func: (model: any, prompt: string, option?: object) => Promise<object>,
    model: any,
    prompt: string,
    option: object,
  ): Promise<void> {
    const generateText = new GenerateText(func, model, prompt, option);
    await generateText
      .generate()
      .then((buyerPerson) => (this._value = buyerPerson))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
