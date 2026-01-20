import { FetchSWRService } from './service';
import type {
  FetchSWRServiceGetConfig,
  FetchSWRServiceInterface,
} from './service.interface';

export const fetchSWRService = FetchSWRService.getInstance();

export namespace fetchSWRService {
  export type Interface<T = unknown> = FetchSWRServiceInterface<T>;
  export type GetConfig<T = unknown> = FetchSWRServiceGetConfig<T>;
}
