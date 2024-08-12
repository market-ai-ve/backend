import { UUID } from 'crypto';

export interface IRepositoryAsync<T> {
  findAll(): Promise<T[]> | null;
  findById(id: UUID): Promise<T> | null;
  save(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: string): void | null;
}

/**
 * E: Entity
 * C: Create
 * U: Update
 */
export interface IRepositorySync<E, C, U> {
  findAll(): E[] | null;
  findById(id: UUID): E | null;
  save(entity: C): E;
  update(id: UUID, entity: U): E;
  delete(id: UUID): void | null;
}
