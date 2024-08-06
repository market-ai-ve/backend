import { BuyerPersonAIServices } from 'src/components/marketing-content/domain/services/AI/buyer-person.ai';
import { Injectable } from 'src/components/shared/dependecy-injection/injectable';

import { CreateBuyerPersonDto } from './create-buyer-person.dto';

@Injectable()
export class CreateBuyerPersonCommandHandler {
  private _model: any;
  private _prompt: string;
  private _option: any;

  constructor(private buyerPersonRepositoryAIServices: BuyerPersonAIServices) {}

  // Getters
  get model(): any {
    return this._model;
  }

  get option(): any {
    return this._option;
  }

  get prompt(): string {
    return this._prompt;
  }
  // Setters

  set model(v: any) {
    this._model = v;
  }

  set option(v: any) {
    this._option = v;
  }

  set prompt(v: string) {
    this._prompt = v;
  }

  async run(dto: CreateBuyerPersonDto, sdk: any): Promise<any> {
    this.prompt
      .replace('companyName', dto.companyName)
      .replace('companyDescription', dto.companyDescription)
      .replace('dataSearch', dto.dataSearch.join(', '));

    this.buyerPersonRepositoryAIServices = new BuyerPersonAIServices();
    const buyerPerson = await this.buyerPersonRepositoryAIServices.create(
      dto.companyName,
      dto.companyDescription,
      dto.dataSearch,
      this.model,
      this.prompt,
      this.option,
      sdk,
    );

    return buyerPerson;
  }
}
