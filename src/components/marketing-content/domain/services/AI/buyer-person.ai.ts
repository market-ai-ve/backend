import { Injectable } from 'src/components/shared/dependecy-injection/injectable';

import { BuyerPerson } from '../../entities';

@Injectable()
export class BuyerPersonAIServices {
  create(model: any, prompt: string, option: any, generateText: any) {
    const newBuyerPerson = BuyerPerson.create(
      generateText,
      model,
      prompt,
      option,
    );

    return newBuyerPerson;
  }
}
