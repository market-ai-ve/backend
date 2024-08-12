import { UUID } from 'crypto';

import { faker } from '@faker-js/faker';

import {
  IAdTone,
  ICreateAdTone,
} from '@/components/marketing-content/domain/interfaces/IAdTone';

import { AdToneInMemory } from './AdToneInMemory';

describe('AdToneInMemory', () => {
  it('should create an instance', () => {
    expect(new AdToneInMemory([])).toBeDefined();
  });

  describe('create method', () => {
    it('should return adtone', () => {
      const newAdTone: ICreateAdTone = { tone: 'tone 01' };

      const adToneInMemory = new AdToneInMemory([]);
      const adTone = adToneInMemory.create(newAdTone);

      expect(adTone).toBeDefined();
      expect(adTone.tone).toBe(newAdTone.tone);
    });
  });

  describe('findAll method', () => {
    it('should return all data in memory', () => {
      const data: IAdTone[] = [];
      for (let i = 0; i < 10; i++) {
        const id = faker.string.uuid() as UUID;
        const tone = faker.animal.bear();
        const date = faker.date.recent();
        data.push({
          id,
          tone,
          createdAt: date,
        });
      }
      const adToneInMemory = new AdToneInMemory(data);

      const adTones = adToneInMemory.findAll();

      expect(adTones).toBeDefined();
      expect(adTones.length).toBe(10);
    });
  });

  describe('findOne method', () => {
    it('should return one data in memory', () => {
      const data: IAdTone[] = [];
      for (let i = 0; i < 10; i++) {
        const id = faker.string.uuid() as UUID;
        const tone = faker.animal.bear();
        const date = faker.date.recent();
        data.push({
          id,
          tone,
          createdAt: date,
        });
      }
      const adToneInMemory = new AdToneInMemory(data);

      const adTone = adToneInMemory.findById(data[0].id);

      expect(adTone).toBeDefined();
      expect(adTone?.id).toBe(data[0].id);
    });
  });

  describe('update metod', () => {
    it('should return one data in memory', () => {
      const data: IAdTone[] = [];
      for (let i = 0; i < 10; i++) {
        const id = faker.string.uuid() as UUID;
        const tone = faker.animal.bear();
        const date = faker.date.recent();
        data.push({
          id,
          tone,
          createdAt: date,
        });
      }
      const adToneInMemory = new AdToneInMemory(data);

      const adTone = adToneInMemory.update(data[0].id, { tone: 'new tone' });

      expect(adTone).toBeDefined();
      expect(adTone?.tone).toBe('new tone');
    });
  });

  describe('delete method', () => {
    it('should delete adTone in memory', () => {
      const data: IAdTone[] = [];
      for (let i = 0; i < 10; i++) {
        const id = faker.string.uuid() as UUID;
        const tone = faker.animal.bear();
        const date = faker.date.recent();
        data.push({
          id,
          tone,
          createdAt: date,
        });
      }
      const adToneInMemory = new AdToneInMemory(data);

      const adTone = adToneInMemory.delete(data[0].id);

      expect(adTone).toBeUndefined();
    });
  });
});
