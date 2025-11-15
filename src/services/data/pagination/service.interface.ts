import type { SWRInfiniteResponse } from 'swr/infinite';

export interface DataPaginationServiceInterface<TCollection> extends Omit<SWRInfiniteResponse<TCollection, any>, 'data'> {
  data: TCollection;
  params: Record<string, any>;
  error: Error | undefined;
  useObserver: (element: HTMLElement | null) => void;
  updateParams: (params: Record<string, any>) => Promise<TCollection[] | undefined>;
}
 