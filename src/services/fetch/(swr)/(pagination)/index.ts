import { FetchSWRPaginationService } from './service';
import type {
  FetchSWRPaginationServiceGetConfig,
  FetchSWRPaginationServiceInterface,
} from './service.interface';

export const fetchSWRPaginationService = FetchSWRPaginationService.getInstance();

export namespace fetchSWRPaginationService {
  export type Interface<T = unknown> = FetchSWRPaginationServiceInterface<T>;
  export type GetConfig<T = unknown> = FetchSWRPaginationServiceGetConfig<T>;
}