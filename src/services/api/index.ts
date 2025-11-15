import { ApiService } from './service';
import type { ApiServiceConfig, ApiServiceInterface } from './service.interface';

export const apiService = ApiService.getInstance();

export namespace apiService {
  export type Interface = ApiServiceInterface;
  export type Config = ApiServiceConfig;
}