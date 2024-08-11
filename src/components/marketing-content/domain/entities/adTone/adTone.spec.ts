import { UUID } from 'crypto';

import { v4 as uuidv4 } from 'uuid';

import { EntityAdTone } from './adTone';

describe('Test Entity Ad Tone', () => {
  it('should create an instance', () => {
    const id = uuidv4() as UUID;
    const tone = 'tone';
    const createdAt = new Date();
    const updatedAt = new Date();

    const adTone = new EntityAdTone(id, tone, createdAt, updatedAt);

    expect(adTone).toBeDefined();
  });

  describe('Test validate', () => {});
});
