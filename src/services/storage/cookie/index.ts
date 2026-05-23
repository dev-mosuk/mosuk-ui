import { StorageCookieService } from '@/services/storage/cookie/service';
import type {
  StorageCookieServiceConfig,
  StorageCookieServiceInterface,
} from '@/services/storage/cookie/service.interface';

export const storageCookieService = StorageCookieService.getInstance();

export namespace storageCookieService {
  export type Interface = StorageCookieServiceInterface;
  export type Config = StorageCookieServiceConfig;
}
