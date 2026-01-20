import { Key, SWRConfiguration, SWRResponse } from 'swr';

export interface FetchSWRServiceInterface<T> extends Omit<SWRResponse<T, any>, 'data'> {
  data: T | undefined;
}

export interface FetchSWRServiceGetConfig<T> {
  key: Key | null;
  fetcher: () => Promise<T>;
  options?: SWRConfiguration;
}
