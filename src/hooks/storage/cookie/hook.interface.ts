import { StorageCookieServiceConfig } from '../../../services/storage/cookie/service.interface';

export interface UseStorageCookieProps<T = any> {
  value: T | null;
  
  create: (value: T, config?: Partial<StorageCookieServiceConfig>) => void;
  read: () => T | null;
  update: (value: Partial<T>, config?: Partial<StorageCookieServiceConfig>) => void;
  delete: (config?: Partial<StorageCookieServiceConfig>) => void;
}
