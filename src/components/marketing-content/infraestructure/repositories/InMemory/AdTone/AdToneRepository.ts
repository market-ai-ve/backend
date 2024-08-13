import { UUID } from 'node:crypto';

import { Injectable } from '@/components/shared/dependecy-injection/injectable';

import { IAdTone, ICreateAdTone } from '../../../../domain/interfaces/IAdTone';
import { IAdToneRepositorySync } from '../../../../domain/repositories';
import { dao } from '../../../DAO';

const { InMemoryAdToneDAO } = dao.contents.inMemory;

@Injectable()
export class InMemoryAdToneRepository implements IAdToneRepositorySync {
  private adToneDAO = new InMemoryAdToneDAO();

  findAll(): IAdTone[] | null {
    const db = this.adToneDAO;
    const findAllAdTOne = db.findAll();
    if (!findAllAdTOne) return null;
    return findAllAdTOne;
  }
  findById(id: UUID): IAdTone | null {
    const db = this.adToneDAO;
    const findAdTone = db.findById(id);

    if (!findAdTone) return null;
    return findAdTone;
  }
  save(entity: ICreateAdTone): IAdTone {
    const db = this.adToneDAO;
    const newAdTone = db.save(entity);
    return newAdTone;
  }
  update(id: UUID, entity: Partial<ICreateAdTone>): IAdTone {
    const db = this.adToneDAO;
    const updateToneName = db.update(id, entity);
    return updateToneName;
  }
  delete(id: UUID): void | null {
    const db = this.adToneDAO;
    const adToneDelete = db.delete(id);
    if (adToneDelete === null) return null;
  }
}
