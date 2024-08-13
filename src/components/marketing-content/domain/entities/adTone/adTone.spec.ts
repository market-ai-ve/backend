import { UUID } from 'node:crypto';

import { v4 as uuidv4 } from 'uuid';

import { EntityAdTone } from './adTone';
import { AdToneData } from '../../valueObjects';

describe('Test Entity Ad Tone', () => {
  it('should create an instance', () => {
    const id = uuidv4() as UUID;
    const tone: AdToneData = new AdToneData(id, 'tone');
    const createdAt = new Date();
    const updatedAt = new Date();

    const adTone = new EntityAdTone(tone, createdAt, updatedAt);

    expect(adTone).toBeDefined();
  });
});
