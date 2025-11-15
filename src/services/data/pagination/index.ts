import { dataPaginationService as BaseDataPaginationService } from './service';
import type { DataPaginationServiceInterface } from './service.interface';

export const dataPaginationService = BaseDataPaginationService;

export namespace dataPaginationService {
  export type Interface<T = unknown> = DataPaginationServiceInterface<T>;
} 