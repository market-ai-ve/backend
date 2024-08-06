import { Injectable } from '@shared/dependecy-injection/injectable';

import { BuyerPerson } from '../../entities';
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
    // const { text } = await generateText({
    //   model: model,
    //   prompt: prompt,
    // })

    // console.log('ESTE ES EL TEXTOOOOO ==> ', text);
    let buyerPerson: BuyerPersonData;
    let createBuyerPerson: BuyerPerson;

    try {
      buyerPerson = new BuyerPersonData(
        companyName,
        companyDescription,
        dataSeach,
      );

      createBuyerPerson = new BuyerPerson(buyerPerson);
      await createBuyerPerson.create(generateText, model, prompt, option);
    } catch (error) {
      throw error;
    }

    const apiDataGenerate = createBuyerPerson.value;
    return apiDataGenerate;
  }
}
