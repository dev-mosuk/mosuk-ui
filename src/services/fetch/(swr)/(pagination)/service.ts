import useSWRInfinite from 'swr/infinite';
import type {
  FetchSWRPaginationServiceGetConfig,
  FetchSWRPaginationServiceInterface,
} from './service.interface';

export class FetchSWRPaginationService {
  private static instance: FetchSWRPaginationService;
  private constructor() {}

  public static getInstance(): FetchSWRPaginationService {
    if (!FetchSWRPaginationService.instance) {
      FetchSWRPaginationService.instance = new FetchSWRPaginationService();
    }

    return FetchSWRPaginationService.instance;
  }

  public get<T>({
    getKey,
    fetcher,
    options,
  }: FetchSWRPaginationServiceGetConfig<T>): FetchSWRPaginationServiceInterface<T> {
    const { data, error, isLoading, mutate, ...rest } = useSWRInfinite<T>(
      getKey,
      async (key) => await fetcher(key),
      {
        errorRetryCount: 1,
        dedupingInterval: 1 * 60 * 1000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        ...(options ?? {}),
      }
    );

    return {
      data,
      error,
      isLoading,
      mutate,
      ...rest,
    };
  }
}