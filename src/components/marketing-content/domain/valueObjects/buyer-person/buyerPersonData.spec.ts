import { BuyerPersonData } from './buyerPersonData';
import { VOValidationError } from '../../exceptions';

describe('Test Value Object Buyer person data', () => {
  const arrayData = [
    'Genero',
    'Edad',
    'Ubicacion',
    'Estado Civil',
    'Trabajo',
    'Intereses',
    'Comportamientos',
    'Historial web',
  ];

  it('Should be defined', () => {
    expect(BuyerPersonData).toBeDefined();
  });

  it('Should create a valid BuyerPersonData object', () => {
    const name = 'Name';
    const description = 'Description';
    const search = arrayData;

    const valueObject = new BuyerPersonData(name, description, search);

    expect(valueObject.value?.companyName).toBe(name);
    expect(valueObject.value?.companyDescription).toBe(description);
    expect(valueObject.value?.dataSearch).toBe(search);
  });

  describe('Attribute Company Name', () => {
    it('Should throw error when companyName is empty', () => {
      const name = '';
      const description = 'Description';
      const search = arrayData;

      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyName should not be empty');
      expect(() => run()).toThrow(VOValidationError);
    });

    it('Should throw error when companyName is not string', () => {
      const name = 0;
      const description = 'Description';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyName must be a string');
      expect(() => run()).toThrow(VOValidationError);
    });

    it('Should throw error when companyName is null', () => {
      const name = null;
      const description = 'Description';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyName must be a string');
      expect(() => run()).toThrow(VOValidationError);
    });

    it('Should throw error when companyName is undefined', () => {
      const name = undefined;
      const description = 'Description';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyName must be a string');
      expect(() => run()).toThrow(VOValidationError);
    });
  });

  describe('Attribute Company Description', () => {
    it('Should throw error when companyDescription is empty', () => {
      const name = 'name';
      const description = '';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyDescription should not be empty');
      expect(() => run()).toThrow(VOValidationError);
    });

    it('Should throw error when companyDescription is not string', () => {
      const name = 'Name';
      const description = 0;
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyDescription must be a string');
      expect(() => run()).toThrow(VOValidationError);
    });

    it('Should throw error when companyDescription is null', () => {
      const name = 'name';
      const description = null;
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyDescription must be a string');
      expect(() => run()).toThrow(VOValidationError);
    });

    it('Should throw error when companyDescription is undefined', () => {
      const name = 'name';
      const description = undefined;
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const run = () => new BuyerPersonData(name, description, search);

      expect(() => run()).toThrow('companyDescription must be a string');
      expect(() => run()).toThrow(VOValidationError);
    });
  });

  describe('Attribute Data Search', () => {
    it('Should return error when dataSearch is not valid', () => {
      const name = 'Name';
      const description = 'Description';

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const run = (name, description, dataSearch) =>
        new BuyerPersonData(name, description, dataSearch);

      expect(() => run(name, description, 'string')).toThrow();
      expect(() => run(name, description, [])).toThrow();
      expect(() => run(name, description, ['Is software developer'])).toThrow();
      expect(() => run(name, description, ['Genero', 'Genero'])).toThrow();
    });
  });

  describe('Method equals', () => {
    // True Return
    it('should return true when all properties are equal', () => {
      const data1 = new BuyerPersonData(
        'Company A',
        'Description A',
        arrayData,
      );
      const data2 = new BuyerPersonData(
        'Company A',
        'Description A',
        arrayData,
      );
      expect(data1.equals(data2)).toBe(true);
    });

    // returns true when companyName has different case sensitivity
    it('should return true when companyName has different case sensitivity', () => {
      const data1 = new BuyerPersonData(
        'Company A',
        'Description A',
        arrayData,
      );
      const data2 = new BuyerPersonData(
        'company a',
        'Description A',
        arrayData,
      );
      expect(data1.equals(data2)).toBe(false);
    });

    // False return

    // returns false when companyName has leading or trailing spaces
    it('should return false when companyName has leading spaces', () => {
      const data1 = new BuyerPersonData(
        ' Company A',
        'Description A',
        arrayData,
      );
      const data2 = new BuyerPersonData(
        'Company A',
        'Description A',
        arrayData,
      );
      expect(data1.equals(data2)).toBe(false);
    });

    // returns false when companyName is a substring of the other
    it('should return false when companyName is a substring of the other', () => {
      const data1 = new BuyerPersonData(
        'Company ABC',
        'Description A',
        arrayData,
      );
      const data2 = new BuyerPersonData('ABC', 'Description A', arrayData);
      expect(data1.equals(data2)).toBe(false);
    });

    // returns false when companyName is completely different
    it('should return false when companyName is completely different', () => {
      const data1 = new BuyerPersonData(
        'Company A',
        'Description A',
        arrayData,
      );
      const data2 = new BuyerPersonData(
        'Company B',
        'Description A',
        arrayData,
      );
      expect(data1.equals(data2)).toBe(false);
    });

    // returns false when companyDescription is different
    it('should return false when companyDescription is different', () => {
      const data1 = new BuyerPersonData(
        'Company A',
        'Description A',
        arrayData,
      );
      const data2 = new BuyerPersonData(
        'Company A',
        'Different Description',
        arrayData,
      );
      expect(data1.equals(data2)).toBe(false);
    });

    // returns false when dataSearch is different
    it('should return false when dataSearch is different', () => {
      const dataSearch01 = [arrayData[0], arrayData[1]];
      const dataSearch02 = [arrayData[2], arrayData[4]];

      const data1 = new BuyerPersonData(
        'Company A',
        'Description A',
        dataSearch01,
      );
      const data2 = new BuyerPersonData(
        'Company A',
        'Description A',
        dataSearch02,
      );
      expect(data1.equals(data2)).toBe(false);
    });
  });
});
