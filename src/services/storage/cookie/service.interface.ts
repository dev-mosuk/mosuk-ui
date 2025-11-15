export interface StorageCookieServiceConfig {
  secure: boolean;
  sameSite: 'Lax' | 'Strict' | 'None';
  expires: number;
  path: string;
  domain?: string;
}

export interface StorageCookieServiceInterface {
  create<T = any>(key: string, value: T, config?: Partial<StorageCookieServiceConfig>): void;  
  read<T = any>(key: string): T | null;  
  update<T = any>(key: string, value: Partial<T>, config?: Partial<StorageCookieServiceConfig>): void;  
  delete(key: string, config?: Partial<StorageCookieServiceConfig>): void;
}
 