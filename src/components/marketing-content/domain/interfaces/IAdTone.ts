import { UUID } from 'crypto';

export interface IAdTone {
  id: UUID;
  tone: string;
  createdAt: Date;
  updatedAt?: Date;
}

export type ICreateAdTone = Omit<IAdTone, 'id' | 'createdAt' | 'updatedAt'>;
export type IUpdateAdTone = Partial<ICreateAdTone>;
