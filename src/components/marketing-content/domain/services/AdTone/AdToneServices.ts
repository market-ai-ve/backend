import { UUID } from 'crypto';

import { Injectable } from '@/components/shared/dependecy-injection/injectable';

import { ICreateAdTone, IUpdateAdTone } from '../../interfaces/IAdTone';
import type { IAdToneRepositorySync } from '../../repositories';

@Injectable()
export class AdToneServiceSync {
  private repository: IAdToneRepositorySync;

  constructor(repository: IAdToneRepositorySync) {
    this.repository = repository;
  }

  findAll() {
    return this.repository.findAll();
  }
  findById(id: UUID) {
    return this.repository.findById(id);
  }
  create(adTone: ICreateAdTone) {
    return this.repository.save(adTone);
  }
  update(id: UUID, entity: IUpdateAdTone) {
    return this.repository.update(id, entity);
  }
  delete(id: UUID) {
    return this.repository.delete(id);
  }
}
