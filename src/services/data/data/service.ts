import useSWR, { Key, SWRConfiguration } from 'swr';
import { apiService } from '../../api';
import { DataServiceInterface } from './service.interface';

export class DataService {
  private static instance: DataService;
  private constructor() {}

  public static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    } 
    return DataService.instance;
  }

  private fetcher = async <T>([url, params]: [
    string,
    Record<string, any> | undefined
  ]): Promise<T> => {
    try {
      const response = await apiService.get<T>(url, {
        params: params as Record<string, any>,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  public get<T>(
    key: Key | null,
    fetcherFn?: ([url, params]: [
      string,
      Record<string, any> | undefined
    ]) => Promise<T>,
    options: SWRConfiguration = {}
  ): DataServiceInterface<T> {
    const { data, error, isLoading, mutate, ...rest } = useSWR<T>(
      key,
      fetcherFn || this.fetcher,
      {
        errorRetryCount: 1,
        dedupingInterval: 1 * 60 * 1000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        ...options,
      }
    );

    return {
      data,
      error,
      isLoading,
      isError: error,
      mutate,
      ...rest,
    };
  }
}

export const dataService = DataService.getInstance();
