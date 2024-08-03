import { IBuyerRepository, ICreateBuyerPerson } from './../../interfaces';

export abstract class BuyerPersonRepository implements IBuyerRepository {
  abstract create(payload: ICreateBuyerPerson): Promise<void>;
}
