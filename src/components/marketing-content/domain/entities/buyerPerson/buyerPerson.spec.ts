import { BuyerPerson } from './buyerPerson';

describe('TestCas entity buyer person', () => {
  beforeAll(() => {
    let entity: BuyerPerson;
  });

  test('Should return class with passed success params', () => {
    const companyName = 'Company Name';
    const companyDescription = 'Company Description';
    const dataSearch = ['Tag 01', 'Tag 02'];

    const buyerPerson = new BuyerPerson(
      companyName,
      companyDescription,
      dataSearch,
    );

    expect(buyerPerson.toString()).toEqual(
      `company name: ${companyName} \n\ncompany description: ${companyDescription} \n\n data search: ${dataSearch.join(', ')}`,
    );
  });

  test('Should return error when passing the companyName parameter as data other than string', () => {
    const companyName = 1;
    const companyDescription = 'Company Description';
    const dataSearch = ['Tag 01', 'Tag 02'];

    expect(() => {
      // @ts-ignore
      return new BuyerPerson(companyName, companyDescription, dataSearch);
    }).toThrow(TypeError);
    expect(() => {
      // @ts-ignore
      return new BuyerPerson(companyName, companyDescription, dataSearch);
    }).toThrow('parameter companyName is not string');
  });

  test('Should return error when passing the companyDescription parameter as data other than string', () => {
    const companyName = 'Company name';
    const companyDescription = 1;
    const dataSearch = ['Tag 01', 'Tag 02'];

    expect(() => {
      // @ts-ignore
      return new BuyerPerson(companyName, companyDescription, dataSearch);
    }).toThrow(TypeError);
    expect(() => {
      // @ts-ignore
      return new BuyerPerson(companyName, companyDescription, dataSearch);
    }).toThrow('parameter companyDescription is not string');
  });

  test('Should return error when passing the dataSearch parameter as data other than Array', () => {
    const companyName = 'Company name';
    const companyDescription = 'Company Description';
    const dataSearch = 1;

    expect(() => {
      // @ts-ignore
      return new BuyerPerson(
        companyName,
        companyDescription,
        dataSearch,
      ).toString();
    }).toThrow(TypeError);
    expect(() => {
      // @ts-ignore
      return new BuyerPerson(
        companyName,
        companyDescription,
        dataSearch,
      ).toString();
    }).toThrow('parameter dataSearch is not array');
  });
});
