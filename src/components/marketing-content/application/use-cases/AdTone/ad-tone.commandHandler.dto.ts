import { UUID } from 'node:crypto';

import { ICreateAdTone } from '@/components/marketing-content/domain/interfaces/IAdTone';

export type ICreateAdToneDTO = ICreateAdTone;

export interface ParamsGetDTO {
  id: UUID;
}
