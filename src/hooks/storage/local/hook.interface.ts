export interface UseStorageLocalProps<T = any> {
  value: T | null;
  
  create: (value: T) => void;
  read: () => T | null;
  update: (value: Partial<T>) => void;
  delete: () => void;
}
