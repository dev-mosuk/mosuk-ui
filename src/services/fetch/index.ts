import { FetchService } from './service';
import type { FetchServiceInterface } from './service.interface';

export const fetchService = FetchService.getInstance();

export namespace fetchService {
  export type Interface = FetchServiceInterface;
}