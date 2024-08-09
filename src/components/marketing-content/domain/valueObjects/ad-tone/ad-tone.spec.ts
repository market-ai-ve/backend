import { UUID } from 'crypto';

import {
  v1 as uuidv1,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
  v6 as uuidv6,
  v7 as uuidv7,
} from 'uuid';

import { AdToneData } from './ad-tone';
import { VOValidationError } from '../../exceptions';

describe('Test VO AdToneData', () => {
  let adToneData: AdToneData;

  describe('Test constructor', () => {
    it('Should create a valid AdToneData object', () => {
      const id = '1-1-1-1-1';
      const tone = 'tone 1';
      adToneData = new AdToneData(id, tone);
      expect(adToneData).toBeDefined();
      expect(adToneData).toBeInstanceOf(AdToneData);
      expect(adToneData.id).toBe(id);
      expect(adToneData.tone).toBe(tone);
      expect(adToneData.value).toBeDefined();
      expect(adToneData.value).toEqual({ id, tone });
    });
  });
  describe('Test validate', () => {
    it('Should return data in value attribute when is valid success all data', async () => {
      const id = uuidv4() as UUID;
      const tone = 'tone 1';

      adToneData = new AdToneData(id, tone);

      await adToneData.validate(adToneData);

      expect(adToneData.value).toEqual({ id, tone });
      expect(adToneData.value.id).toBe(id);
      expect(adToneData.value.tone).toBe(tone);
    });

    it('Should throw an error when id is null invalid', async () => {
      const id = null;
      const tone = 'tone 1';

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      adToneData = new AdToneData(id, tone);

      await expect(adToneData.validate(adToneData)).rejects.toThrow(
        VOValidationError,
      );
      await expect(adToneData.validate(adToneData)).rejects.toThrow(
        'id must be a UUID',
      );
    });

    // test to validar throw when id is uuidv1
    it('Should throw when id is uuid version diferente to version 4', async () => {
      const idV1 = uuidv1() as UUID;

      const NAMESPACE_DNS = uuidv3.DNS;
      const idV3 = uuidv3('example.com', NAMESPACE_DNS) as UUID;

      const idV5 = uuidv5('example.com', NAMESPACE_DNS) as UUID;

      const idV6 = uuidv6() as UUID;

      const idV7 = uuidv7() as UUID;

      const tone = 'tone 1';

      const adToToneDataWithidV1 = new AdToneData(idV1, tone);
      const adToToneDataWithidV3 = new AdToneData(idV3, tone);
      const adToToneDataWithidV5 = new AdToneData(idV5, tone);
      const adToToneDataWithidV6 = new AdToneData(idV6, tone);
      const adToToneDataWithidV7 = new AdToneData(idV7, tone);

      // Validate version 1
      await expect(
        adToToneDataWithidV1.validate(adToToneDataWithidV1),
      ).rejects.toThrow(VOValidationError);
      await expect(
        adToToneDataWithidV1.validate(adToToneDataWithidV1),
      ).rejects.toThrow('id must be a UUID');

      // validate version 3
      await expect(
        adToToneDataWithidV3.validate(adToToneDataWithidV3),
      ).rejects.toThrow(VOValidationError);
      await expect(
        adToToneDataWithidV3.validate(adToToneDataWithidV3),
      ).rejects.toThrow('id must be a UUID');

      // validate version 5
      await expect(
        adToToneDataWithidV5.validate(adToToneDataWithidV5),
      ).rejects.toThrow(VOValidationError);
      await expect(
        adToToneDataWithidV5.validate(adToToneDataWithidV5),
      ).rejects.toThrow('id must be a UUID');

      // validate version 6
      await expect(
        adToToneDataWithidV6.validate(adToToneDataWithidV6),
      ).rejects.toThrow(VOValidationError);
      await expect(
        adToToneDataWithidV6.validate(adToToneDataWithidV6),
      ).rejects.toThrow('id must be a UUID');

      // validate version 7
      await expect(
        adToToneDataWithidV7.validate(adToToneDataWithidV7),
      ).rejects.toThrow(VOValidationError);
      await expect(
        adToToneDataWithidV7.validate(adToToneDataWithidV7),
      ).rejects.toThrow('id must be a UUID');
    });

    it('Should throw an error when name is null invalid', async () => {
      const id = uuidv4() as UUID;
      const tone = null;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      adToneData = new AdToneData(id, tone);

      await expect(adToneData.validate(adToneData)).rejects.toThrow(
        VOValidationError,
      );
      await expect(adToneData.validate(adToneData)).rejects.toThrow(
        'tone must be a string',
      );
    });
  });
  describe('Test equals', () => {
    // returns true if both id and tone match exactly
    it('should return true if both id and tone match exactly', () => {
      const id = uuidv4() as UUID;
      const tone = 'tone 1';

      const adTone1 = new AdToneData(id, tone);
      const adTone2 = new AdToneData(id, tone);

      expect(adTone1.equals(adTone2)).toBe(true);
    });

    // returns false when id is different
    it('should return false when id is different', () => {
      const id1 = uuidv4() as UUID;
      const id2 = uuidv4() as UUID;
      const tone = 'tone 1';

      const adTone1 = new AdToneData(id1, tone);
      const adTone2 = new AdToneData(id2, tone);

      expect(adTone1.equals(adTone2)).toBe(false);
    });

    // returns false when tone is different
    it('should return false when id is different', () => {
      const id = uuidv4() as UUID;
      const tone1 = 'tone 1';
      const tone2 = 'tone 2';

      const adTone1 = new AdToneData(id, tone1);
      const adTone2 = new AdToneData(id, tone2);

      expect(adTone1.equals(adTone2)).toBe(false);
    });
  });
});
