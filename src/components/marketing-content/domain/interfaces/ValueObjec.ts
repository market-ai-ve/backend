export interface ValueObject<T, I> {
  value: I;
  validate(instance: T): void;
  equals(other: T): boolean;
}
