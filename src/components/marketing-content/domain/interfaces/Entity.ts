export interface Entity<T> {
  value: T;
  validate(): Promise<any>;
}
