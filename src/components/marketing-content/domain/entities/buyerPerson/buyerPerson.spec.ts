import { BuyerPerson } from './buyerPerson';
import { BuyerPersonData } from '../../valueObjects';
import { IGenerateText, ILanguageModel } from '@shared/interfaces/ia';
import { GenerateText } from './../generateText';

const fakeBuyerPerson = new BuyerPersonData(
  'Flowers',
  'venta de flores en lina',
  ['Edad'],
);

const fakeResponseBuyerPerson = {
  term: ['term 01', 'term 02', 'term 03'],
};

const generateTextStub = {
  generate: () => fakeResponseBuyerPerson,
};

jest.mock('./../generateText/generateText', () => {
  return {
    GenerateText: jest.fn().mockImplementation(() => ({
      generate: jest.fn().mockResolvedValue(fakeResponseBuyerPerson),
    })),
  };
});

describe('Entity BuyerPerson', () => {
  let entity: BuyerPerson;

  beforeEach(() => {
    entity = new BuyerPerson(fakeBuyerPerson);
  });

  describe('Method Generate', () => {
    it('Should return term buyer person', async () => {
      // Arrange
      const mockGenerateText: IGenerateText = {
        // @ts-ignore
        generate: jest.fn().mockReturnValue(fakeResponseBuyerPerson),
      };
      const dummyModel: ILanguageModel = {
        // @ts-ignore
        model: 'gpt-3.5-turbo',
      };
      const dummyPrompt: string = 'prompt';

      await entity.create(mockGenerateText, dummyModel, dummyPrompt);
      const response = entity.value;

      expect(response).toBe(fakeResponseBuyerPerson);
      expect(GenerateText).toHaveBeenCalled();
    });
  });
});
