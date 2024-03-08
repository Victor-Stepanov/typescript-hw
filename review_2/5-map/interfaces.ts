export interface ICmap<T> {
  set(key: string, value: T): void;
  delete(key: string): void;
  get(key: string): T | null;
  clear(): void;
}
