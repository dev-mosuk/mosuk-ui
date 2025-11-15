import { dataService as BaseDataService } from './service';
import type { DataServiceInterface } from './service.interface';

export const dataService = BaseDataService;

export namespace dataService {
  export type Interface<T = unknown> = DataServiceInterface<T>;
} 