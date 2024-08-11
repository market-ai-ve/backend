import { UUID } from 'crypto';

import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  validateSync,
} from 'class-validator';

import { UUID_VERSION } from '@shared/contants';

import { VOValidationError } from '../../exceptions';
import { IAdTone } from '../../interfaces/IAdTone';
import { ValueObject } from '../../interfaces/ValueObjec';

export class AdToneData
  implements ValueObject<AdToneData, Pick<IAdTone, 'id' | 'tone'>>
{
  @IsUUID(UUID_VERSION)
  public id: UUID;

  @IsNotEmpty()
  @IsString()
  public tone: string;

  @IsOptional()
  public value: Pick<IAdTone, 'id' | 'tone'>;

  constructor(id: UUID, tone: string) {
    this.id = id;
    this.tone = tone;

    this.validate();
    this.value = { id, tone };
  }

  validate(): void {
    const errors = validateSync(this);

    if (errors.length > 0) {
      throw new VOValidationError(errors);
    }
  }
  equals(other: AdToneData): boolean {
    return this.id === other.id && this.tone === other.tone;
  }
}
