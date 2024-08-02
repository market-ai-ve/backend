// Primity Values
export interface PrimitiviBuyerPerson {
  companyName: string;
  companyDescription: string;
  dataSearch?: string[];
  searchTerms: string[];
}

// Data compuesta
export type ICreateBuyerPerson = Omit<PrimitiviBuyerPerson, 'searchTerms'>;
export type IReturnCreatePerson = Pick<PrimitiviBuyerPerson, 'searchTerms'>;

// Repository
export interface BuyerRepository {
  create(payload: ICreateBuyerPerson): ICreateBuyerPerson;
}

// IA Generate Text
export interface CreateBuyerPersonAI {
  create(payload: ICreateBuyerPerson): IReturnCreatePerson;
}
