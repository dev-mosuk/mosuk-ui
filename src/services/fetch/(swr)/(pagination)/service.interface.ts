import type {
  SWRInfiniteConfiguration,
  SWRInfiniteKeyLoader,
  SWRInfiniteResponse,
} from 'swr/infinite';

export interface FetchSWRPaginationServiceInterface<T>
  extends Omit<SWRInfiniteResponse<T, any>, 'data'> {
  data: T[] | undefined;
}

export interface FetchSWRPaginationServiceGetConfig<T> {
  getKey: SWRInfiniteKeyLoader;
  fetcher: (key: any) => Promise<T>;
  options?: SWRInfiniteConfiguration<T, any>;
}