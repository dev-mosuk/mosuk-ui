import { StorageCookieServiceConfig, StorageCookieServiceInterface } from './service.interface';

const DEFAULT_CONFIG: StorageCookieServiceConfig = {
  expires: 180,
  path: '/',
  secure: false,
  sameSite: 'Lax',
} as const;

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

export class StorageCookieService implements StorageCookieServiceInterface {
  private static instance: StorageCookieService;

  static getInstance(): StorageCookieService {
    if (!StorageCookieService.instance) {
      StorageCookieService.instance = new StorageCookieService();
    }
    
    return StorageCookieService.instance;
  }

  private createConfig(config?: Partial<StorageCookieServiceConfig>): Partial<StorageCookieServiceConfig> {
    return {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  create<T = any>(key: string, value: T, config?: Partial<StorageCookieServiceConfig>): void {
    if (!isBrowser) return;

    const cfg = this.createConfig(config);
    const encodedKey = encodeURIComponent(key);
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    const encodedValue = encodeURIComponent(stringValue);
    let cookieString = `${encodedKey}=${encodedValue}`;

    if (cfg.expires !== undefined) {
      const date = new Date();
      date.setTime(date.getTime() + cfg.expires * 24 * 60 * 60 * 1000);
      cookieString += `; Expires=${date.toUTCString()}`;
    }
    if (cfg.path) {
      cookieString += `; Path=${cfg.path}`;
    }
    if (cfg.domain) {
      cookieString += `; Domain=${cfg.domain}`;
    }
    if (cfg.secure) {
      cookieString += `; Secure`;
    }
    if (cfg.sameSite) {
      cookieString += `; SameSite=${cfg.sameSite}`;
    }
    document.cookie = cookieString;
  }

  read<T = any>(key: string): T | null {
    if (!isBrowser) return null;

    const encodedKey = encodeURIComponent(key);
    const nameEQ = `${encodedKey}=`;
    const cookies = document.cookie ? document.cookie.split('; ') : [];

    for (const c of cookies) {
      if (c.indexOf(nameEQ) === 0) {
        const raw = decodeURIComponent(c.substring(nameEQ.length));
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
    }

    return null;
  }

  update<T = any>(key: string, value: Partial<T>, config?: Partial<StorageCookieServiceConfig>): void {
    if (!isBrowser) return;

    const data = this.read<T>(key);
    if (data && typeof data === 'object' && typeof value === 'object') {
      this.create(key, { ...data, ...value }, config);
    } else {
      this.create(key, value as T, config);
    }
  }

  delete(key: string, config?: Partial<StorageCookieServiceConfig>): void {
    if (!isBrowser) return;

    const cfg = this.createConfig(config);
    const encodedKey = encodeURIComponent(key);
    let cookieString = `${encodedKey}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    if (cfg.path) {
      cookieString += `; Path=${cfg.path}`;
    }
    if (cfg.domain) {
      cookieString += `; Domain=${cfg.domain}`;
    }
    if (cfg.sameSite) {
      cookieString += `; SameSite=${cfg.sameSite}`;
    }
    if (cfg.secure) {
      cookieString += `; Secure`;
    }
    document.cookie = cookieString;
  }
}