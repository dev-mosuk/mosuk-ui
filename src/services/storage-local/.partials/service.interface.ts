export interface StorageLocalServiceInterface {
  create<T = any>(key: string, value: T): void;
  read<T = any>(key: string): T | null;
  update<T = any>(key: string, value: Partial<T>): void;
  delete(key: string): void;
}
