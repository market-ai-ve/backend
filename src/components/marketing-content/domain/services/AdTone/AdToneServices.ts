import { UUID } from 'crypto';

import { Inject } from '@nestjs/common';

import { ADTONE_REPOSITORY } from '@/components/shared/contants';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

import { ICreateAdTone, IUpdateAdTone } from '../../interfaces/IAdTone';
import type { IAdToneRepositorySync } from '../../repositories';

@Injectable()
export class AdToneServiceSync {
  constructor(
    @Inject(ADTONE_REPOSITORY)
    private readonly repository: IAdToneRepositorySync,
  ) {
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
