import useSWR from 'swr';
import {
  FetchSWRServiceGetConfig,
  FetchSWRServiceInterface,
} from './service.interface';

export class FetchSWRService {
  private static instance: FetchSWRService;
  private constructor() {}

  public static getInstance(): FetchSWRService {
    if (!FetchSWRService.instance) {
      FetchSWRService.instance = new FetchSWRService();
    }

    return FetchSWRService.instance;
  }

  public get<T>({
    key,
    fetcher,
    options,
  }: FetchSWRServiceGetConfig<T>): FetchSWRServiceInterface<T> {
    const { data, error, isLoading, mutate, ...rest } = useSWR<T>(
      key,
      async () => await fetcher(),
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
