import { IAdTone } from './../../interfaces/IAdTone';
import { Entity } from '../../interfaces/Entity';
import { AdToneData } from '../../valueObjects';

export class EntityAdTone implements Entity<IAdTone> {
  private _tone: AdToneData;
  private _createdAt: Date;
  private _updatedAt: Date;

  public value: IAdTone;

  constructor(tone: AdToneData, createdAt: Date, updatedAt: Date) {
    this._tone = tone;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;

    this.value = {
      id: this._tone.id,
      tone: this._tone.tone,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }
}
