import { UUID } from 'crypto';

import { IAdTone } from './../../interfaces/IAdTone';
import { Entity } from '../../interfaces/Entity';
import { AdToneData } from '../../valueObjects';

export class EntityAdTone implements Entity<IAdTone> {
  private _id: UUID;
  private _tone: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  public value: IAdTone;

  constructor(id: UUID, tone: string, createdAt: Date, updatedAt: Date) {
    this._id = id;
    this._tone = tone;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;

    this.value = {
      id: this._id,
      tone: this._tone,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  validate(): any {
    const adTone = new AdToneData(this._id, this._tone);
    return adTone;
    // await adTone
    //   .validate(adTone)
    //   .then(() => true)
    //   .catch((error) => {
    //     if (error.name === 'VOValidationError') throw error;
    //     else throw new Error(error.message); // Create custome exception to this case, i create a excellent case is conflict
    //   });
  }
}
