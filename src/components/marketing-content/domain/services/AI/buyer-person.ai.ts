import { Injectable } from '@shared/dependecy-injection/injectable';

import { EntityBuyerPerson } from '../../entities';
import { BuyerPersonData } from '../../valueObjects';

@Injectable()
export class BuyerPersonAIServices {
  async create(
    companyName: string,
    companyDescription: string,
    dataSeach: string[],
    model: any,
    prompt: string,
    option: any,
    generateText: any,
  ) {
    let buyerPerson: BuyerPersonData;
    let createBuyerPerson: EntityBuyerPerson;

    try {
      buyerPerson = new BuyerPersonData(
        companyName,
        companyDescription,
        dataSeach,
      );

      createBuyerPerson = new EntityBuyerPerson(buyerPerson);
      await createBuyerPerson.create(generateText, model, prompt);
    } catch (error) {
      throw error;
    }

    const apiDataGenerate = createBuyerPerson.value;
    return apiDataGenerate;
  }
}
