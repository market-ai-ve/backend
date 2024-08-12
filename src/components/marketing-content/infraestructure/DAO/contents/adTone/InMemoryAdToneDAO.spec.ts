import { UUID } from 'crypto';

import { InMemoryAdToneDAO } from './InMemoryAdToneDAO';
import { AdToneInMemory } from '../../../persistence/InMemory';

describe('InMemoryAdToneDAO', () => {
  let dao: InMemoryAdToneDAO;
  let db: AdToneInMemory;

  beforeEach(() => {
    db = new AdToneInMemory([]);
    dao = new InMemoryAdToneDAO(db);
  });

  it('should save an ad tone', () => {
    const newTone = { tone: 'Friendly' };
    const savedTone = dao.save(newTone);
    expect(savedTone).toHaveProperty('id');
    expect(savedTone.tone).toBe('Friendly');
  });

  it('should find an ad tone by id', () => {
    const newTone = { tone: 'Serious' };
    const savedTone = dao.save(newTone);
    const foundTone = dao.findById(savedTone.id);
    expect(foundTone).toEqual(savedTone);
  });

  it('should return null when ad tone not found', () => {
    const foundTone = dao.findById('non-existing-id' as UUID);
    expect(foundTone).toBeNull();
  });

  it('should update an ad tone', () => {
    const newTone = { tone: 'Energetic' };
    const savedTone = dao.save(newTone);
    const updatedTone = dao.update(savedTone.id, { tone: 'Calm' });
    expect(updatedTone.tone).toBe('Calm');
  });

  it('should delete an ad tone', () => {
    const newTone = { tone: 'Sad' };
    const savedTone = dao.save(newTone);
    dao.delete(savedTone.id);
    const foundTone = dao.findById(savedTone.id);
    expect(foundTone).toBeNull();
  });
});
