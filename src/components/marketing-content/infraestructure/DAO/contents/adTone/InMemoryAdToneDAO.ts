import { UUID } from 'crypto';

import {
  IAdTone,
  ICreateAdTone,
} from '@/components/marketing-content/domain/interfaces/IAdTone';
import { IAdToneDAOSync } from '@/components/marketing-content/domain/repositories/Repository';

import { AdToneInMemory } from '../../../persistence/InMemory';

export class InMemoryAdToneDAO implements IAdToneDAOSync {
  private readonly db: AdToneInMemory;

  constructor(db: AdToneInMemory) {
    this.db = db;
  }
  findAll(): IAdTone[] | null {
    return this.db.findAll();
  }
  findById(id: UUID): IAdTone | null {
    const adTone = this.db.findById(id);
    return adTone ? adTone : null;
  }
  save(entity: ICreateAdTone): IAdTone {
    return this.db.create(entity);
  }
  update(id: UUID, entity: Partial<ICreateAdTone>): IAdTone {
    return this.db.update(id, entity);
  }
  delete(id: UUID): void | null {
    this.db.delete(id);
  }
}
