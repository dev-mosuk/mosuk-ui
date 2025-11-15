import { StorageCookieService } from './service';
import type {
  StorageCookieServiceConfig,
  StorageCookieServiceInterface,
} from './service.interface';

export const storageCookieService = StorageCookieService.getInstance();

export namespace storageCookieService {
  export type Interface = StorageCookieServiceInterface;
  export type Config = StorageCookieServiceConfig;
}
