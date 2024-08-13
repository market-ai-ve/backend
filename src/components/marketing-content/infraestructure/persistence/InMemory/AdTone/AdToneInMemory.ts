import { UUID } from 'node:crypto';

import { v4 as uuidv4 } from 'uuid';

import {
  IAdTone,
  ICreateAdTone,
  IUpdateAdTone,
} from '@/components/marketing-content/domain/interfaces/IAdTone';

export class AdToneInMemory {
  InMemory: IAdTone[];

  constructor(db: IAdTone[] | []) {
    this.InMemory = db;
  }

  findAll() {
    return this.InMemory;
  }

  findById(id: IAdTone['id']) {
    return this.InMemory.find((element) => element.id === id);
  }

  create(adTone: ICreateAdTone): IAdTone {
    const id = uuidv4() as UUID;
    const createdAt = new Date();

    const newData = {
      ...adTone,
      id,
      createdAt,
    };
    this.InMemory.push(newData);

    const adToneCreated = this.findById(id);

    if (!adToneCreated) throw new Error('Error creating adTone');

    return adToneCreated;
  }

  // create method to update one element in array
  update(id: IAdTone['id'], adTone: IUpdateAdTone) {
    const data = this.findById(id);
    if (!data) throw new Error('Error updating adTone');
    const index = this.InMemory.indexOf(data);
    const updatedData = { ...data, ...adTone };
    return (this.InMemory[index] = updatedData);
  }

  delete(id: IAdTone['id']) {
    const data = this.findById(id);

    if (!data) throw new Error('Error deleting adTone');
    this.InMemory = this.InMemory.filter((element) => element.id !== id);
  }
}
