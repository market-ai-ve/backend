import { BuyerPersonData } from './../../valueObjects';
import { GenerateTextResult } from "ai";


export class GenerateText {
  private readonly generateText: ( params: object ) => Promise<object>;
  private readonly model;
  private readonly prompt: string;
  // private readonly option: object = {};

  constructor(
    generateText: ( 
      params: object,
    ) => Promise<object>,
    model: any,
    prompt: string,
  ) {
    this.generateText = generateText;
    this.model = model;
    this.prompt = prompt;
  }

  async generate(): Promise<object> {
    // @ts-ignore
    const { text } = await this.generateText({model: this.model, prompt: this.prompt});
    const replaceText = text.replace(/```json\s*|\s*```/g, '');
    return JSON.parse(replaceText);;
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
    func: any,
    model: any,
    prompt: string,
    // option: object,
  ): Promise<void> {
    const generateText = new GenerateText(func, model, prompt);
    await generateText
      .generate()
      .then((buyerPerson) => (this._value = buyerPerson))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
