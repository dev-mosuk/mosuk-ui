import { SWRResponse } from 'swr';

export interface DataServiceInterface<T> extends Omit<SWRResponse<T, any>, 'data'> {
  data: T | undefined;
  isLoading: boolean;
  isError: any;
}
