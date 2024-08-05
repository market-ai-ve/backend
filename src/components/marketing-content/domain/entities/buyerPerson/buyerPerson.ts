import { BuyerPersonData } from './../../valueObjects';

export class BuyerPerson {
  constructor(
    readonly data: BuyerPersonData,
    private buyerPerson?: any,
  ) {
    this.buyerPerson = buyerPerson;
  }

  // Create Buyer Person using IA
  static async create(
    generateText: any,
    model: any,
    prompt: string,
    option: any,
  ) {
    const generate = await generateText({
      model,
      prompt,
      ...option,
    });

    return generate;
  }

  toJson() {
    return {
      companyName: this.data.value.companyName,
      companyDescription: this.data.value.companyDescription,
      dataSearch: this.data.value.dataSearch,
      buyerPerson: this.buyerPerson,
    };
  }

  toString() {
    return `company name: ${this.data.value.companyName} \n\ncompany description: ${this.data.value.companyDescription} \n\n data search: ${this.data.value.dataSearch.join(', ')}`;
  }
}
