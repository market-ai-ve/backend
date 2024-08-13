import { IGenerateText, ILanguageModel } from '@shared/interfaces/ia';

import { EntityBuyerPerson } from './buyerPerson';
import { BuyerPersonData } from '../../valueObjects';

const fakeBuyerPerson = new BuyerPersonData(
  'Flowers',
  'venta de flores en lina',
  ['Edad'],
);

const fakeResponseBuyerPerson = {
  text:
    '```json\n' +
    '{\n' +
    '  "data": {\n' +
    '    "edad": "25-45 años",\n' +
    '    "terminos_de_busqueda": [\n' +
    '      "string en javascript",\n' +
    '      "manipulacion de strings",\n' +
    '      "concatenar strings",\n' +
    '      "comparar strings",\n' +
    '      "convertir string a numero",\n' +
    '      "substring en javascript",\n' +
    '      "split string javascript",\n' +
    '      "reemplazar string",\n' +
    '      "validar string",\n' +
    '      "longitud de string"\n' +
    '    ]\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '',
};

describe('EntityBuyerPerson', () => {
  let entity: EntityBuyerPerson;
  let mockGenerateText: jest.Mock;
  let mockSpyGenerate: jest.Mock;

  beforeEach(() => {
    mockGenerateText = jest.fn();
    mockSpyGenerate = jest.fn();

    jest.doMock('./../generateText/generateText', () => {
      return {
        GenerateText: mockGenerateText.mockImplementation(() => ({
          generate: mockSpyGenerate,
          set generateTextFunc(fn: IGenerateText) {
            this._generateText = fn;
          },
          set model(model: ILanguageModel) {
            this._model = model;
          },
          set prompt(prompt: string) {
            this._prompt = prompt;
          },
        })),
      };
    });

    entity = new EntityBuyerPerson(fakeBuyerPerson);
  });

  afterEach(() => {
    jest.resetModules(); // Limpia el módulo después de cada prueba para asegurar que el mock no se reutilice
  });

  describe('Method Generate', () => {
    it('Should return term buyer person', async () => {
      // Arrange
      const responseDataExpected = {
        data: {
          edad: '25-45 años',
          terminos_de_busqueda: [
            'string en javascript',
            'manipulacion de strings',
            'concatenar strings',
            'comparar strings',
            'convertir string a numero',
            'substring en javascript',
            'split string javascript',
            'reemplazar string',
            'validar string',
            'longitud de string',
          ],
        },
      };
      mockSpyGenerate.mockResolvedValue(fakeResponseBuyerPerson);

      const dummyFn: IGenerateText = jest
        .fn()
        .mockResolvedValue(fakeResponseBuyerPerson);
      const dummyModel: ILanguageModel = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        model: 'gpt-3.5-turbo',
      };
      const dummyPrompt: string = 'prompt';

      // Act
      await entity.create(dummyFn, dummyModel, dummyPrompt);
      const response = entity.value;

      // Assert
      expect(response).toStrictEqual(responseDataExpected);
    });
  });
});
