export interface ValueObject<T, I> {
  value: I;
  validate(instance: T): Promise<void>;
  equals(other: T): boolean;
}
