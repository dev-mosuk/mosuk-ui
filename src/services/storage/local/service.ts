import { StorageLocalServiceInterface } from './service.interface';

const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

export class StorageLocalService implements StorageLocalServiceInterface {
  private static instance: StorageLocalService;

  static getInstance(): StorageLocalService {
    if (!StorageLocalService.instance) {
      StorageLocalService.instance = new StorageLocalService();
    }
    
    return StorageLocalService.instance;
  }

  create<T = any>(key: string, value: T): void {
    if (!isBrowser) return;

    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }

  read<T = any>(key: string): T | null {
    if (!isBrowser) return null;

    const raw = localStorage.getItem(key);
    if (!raw) return null;

    // Сначала пытаемся JSON (для объектов/массивов)
    try {
      return JSON.parse(raw) as T;
    } catch {
      // Число (включая отрицательные и дробные)
      if (/^-?\d+(\.\d+)?$/.test(raw)) {
        return Number(raw) as T;
      }

      // Булево
      if (raw === 'true' || raw === 'false') {
        return (raw === 'true') as T;
      }

      // Строка
      return raw as T;
    }
  }

  update<T = any>(key: string, value: Partial<T>): void {
    if (!isBrowser) return;

    const data = this.read<T>(key);
    if (data && typeof data === 'object' && typeof value === 'object') {
      this.create(key, { ...data, ...value });
    } else {
      this.create(key, value as T);
    }
  }

  delete(key: string): void {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  }
}

export const storageLocalService = StorageLocalService.getInstance();
