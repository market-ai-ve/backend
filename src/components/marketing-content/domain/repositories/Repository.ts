import { IAdTone, ICreateAdTone, IUpdateAdTone } from '../interfaces/IAdTone';
import { IRepositorySync } from '../interfaces/Repository';

// Sync
export type IAdToneRepositorySync = IRepositorySync<
  IAdTone,
  ICreateAdTone,
  IUpdateAdTone
>;
export type IAdToneDAOSync = IRepositorySync<
  IAdTone,
  ICreateAdTone,
  IUpdateAdTone
>;
