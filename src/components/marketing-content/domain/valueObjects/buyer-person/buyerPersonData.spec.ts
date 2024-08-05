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

    expect(valueObject.value.companyName).toBe(name);
    expect(valueObject.value.companyDescription).toBe(description);
    expect(valueObject.value.dataSearch).toBe(search);
  });

  describe('Attribute Company Name', () => {
    it('Should throw error when companyName is empty', async () => {
      const name = '';
      const description = 'Description';
      const search = arrayData;

      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyName should not be empty',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });

    it('Should throw error when companyName is not string', async () => {
      const name = 0;
      const description = 'Description';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyName must be a string',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });

    it('Should throw error when companyName is null', async () => {
      const name = null;
      const description = 'Description';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyName must be a string',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });

    it('Should throw error when companyName is undefined', async () => {
      const name = undefined;
      const description = 'Description';
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyName must be a string',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });
  });

  describe('Attribute Company Description', () => {
    it('Should throw error when companyDescription is empty', async () => {
      const name = 'name';
      const description = '';
      const search = arrayData;

      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyDescription should not be empty',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });

    it('Should throw error when companyDescription is not string', async () => {
      const name = 'Name';
      const description = 0;
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyDescription must be a string',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });

    it('Should throw error when companyDescription is null', async () => {
      const name = 'name';
      const description = null;
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyDescription must be a string',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });

    it('Should throw error when companyDescription is undefined', async () => {
      const name = 'name';
      const description = undefined;
      const search = arrayData;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const valueObject = new BuyerPersonData(name, description, search);

      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        'companyDescription must be a string',
      );
      await expect(valueObject.validate(valueObject)).rejects.toThrow(
        VOValidationError,
      );
    });
  });

  describe('Attribute Data Search', () => {
    it('Should return error when dataSearch is not valid', () => {
      const name = 'Name';
      const description = 'Description';

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const isNotArray = new BuyerPersonData(name, description, 'string');
      const isArrayEmpty = new BuyerPersonData(name, description, []);
      const elementNotAllowed = new BuyerPersonData(name, description, [
        'Is software developer',
      ]);
      const isArrayNoUnique = new BuyerPersonData(name, description, [
        'Genero',
        'Genero',
      ]);

      expect(isNotArray.validate(isNotArray)).rejects.toThrow();
      expect(isArrayEmpty.validate(isArrayEmpty)).rejects.toThrow();
      expect(elementNotAllowed.validate(elementNotAllowed)).rejects.toThrow();
      expect(isArrayNoUnique.validate(isArrayNoUnique)).rejects.toThrow();
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
