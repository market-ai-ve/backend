import { Injectable } from 'src/components/shared/dependecy-injection/injectable';

@Injectable()
export class BuyerPersonAIServices {
  create(model: any, prompt: string, option: any, generateText: any) {
    return generateText({
      model,
      prompt,
      ...option,
    });
  }
}
