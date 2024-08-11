export interface Entity<T> {
  value: T;
  validate(): any;
}
