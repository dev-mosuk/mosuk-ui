import { useCallback, useEffect, useMemo, useRef } from 'react';
import useSWRInfinite, {
  type SWRInfiniteConfiguration,
  type SWRInfiniteKeyLoader,
} from 'swr/infinite';
import { authService } from '../../auth/service';
import type { DataPaginationServiceInterface } from './service.interface';

class DataPaginationService {
  private static instance: DataPaginationService;

  private constructor() {}

  public static getInstance(): DataPaginationService {
    if (!DataPaginationService.instance) {
      DataPaginationService.instance = new DataPaginationService();
    }
    return DataPaginationService.instance;
  }

  readonly fetcher = async <T>(url: string): Promise<T> => {
    const token = authService.read()?.token;
    const headers: HeadersInit = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  };

  createIntersectionObserver(
    setSize: (size: number | ((prev: number) => number)) => Promise<any>,
    isLoading: boolean,
    loadingRef: React.MutableRefObject<boolean>
  ): IntersectionObserver {
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadingRef.current && !isLoading) {
          loadingRef.current = true;
          setSize((prev) => prev + 1).finally(() => {
            loadingRef.current = false;
          });
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 200px 0px',
      }
    );
  }

  public get<TCollection>(
    endpoint: string | null | undefined,
    initialParams: Record<string, any> = {},
    swrConfig?: SWRInfiniteConfiguration<TCollection, any>
  ): DataPaginationServiceInterface<TCollection> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const paramsRef = useRef<Record<string, any>>(initialParams);

    const getKey: SWRInfiniteKeyLoader = useCallback(
      (pageIndex, previousData) => {
        if (!endpoint || !baseUrl) return null;

        // Если предыдущая страница пустая, больше данных нет
        if (
          previousData &&
          Array.isArray(previousData) &&
          previousData.length === 0
        ) {
          return null;
        }

        const searchParams = new URLSearchParams({
          page: pageIndex.toString(),
          ...Object.fromEntries(
            Object.entries(paramsRef.current)
              .filter(([key]) => key !== 'page') // Исключаем page, используем pageIndex
              .map(([key, value]) => [key, String(value)])
          ),
        });

        return `${baseUrl}${endpoint}?${searchParams.toString()}`;
      },
      [endpoint, baseUrl]
    );

    const swrState = useSWRInfinite<TCollection>(getKey, this.fetcher, {
      revalidateFirstPage: false,
      revalidateAll: false,
      ...swrConfig,
    });

    const { data, size, isLoading, error, mutate, setSize, isValidating } =
      swrState;

    // Объединение и дедупликация данных
    const mergedData = useMemo(() => {
      if (!data?.length) return [] as unknown as TCollection;

      const firstPage = data[0];
      if (!Array.isArray(firstPage)) {
        // Если данные не массив, возвращаем последнюю страницу
        return data[data.length - 1];
      }

      // Объединяем все страницы и дедуплицируем по ID
      const flatData = data.flat();
      const seenIds = new Set<string | number>();
      const uniqueItems: any[] = [];

      for (const item of flatData) {
        if (!item || typeof item !== 'object') continue;

        const id =
          'id' in item &&
          (typeof item.id === 'string' || typeof item.id === 'number')
            ? item.id
            : JSON.stringify(item);

        if (!seenIds.has(id)) {
          seenIds.add(id);
          uniqueItems.push(item);
        }
      }

      return uniqueItems as unknown as TCollection;
    }, [data]);

    const updateParams = useCallback(
      async (
        newParams: Record<string, any>
      ): Promise<TCollection[] | undefined> => {
        // Исключаем page - он управляется через pageIndex
        const { page, ...filteredParams } = newParams;

        // Обновляем параметры
        paramsRef.current = { ...paramsRef.current, ...filteredParams };

        // Очищаем кеш и сбрасываем пагинацию
        await mutate(undefined, { revalidate: false });
        await setSize(1);

        // Перезагружаем данные с новыми параметрами
        return mutate();
      },
      [mutate, setSize]
    );

    // Intersection Observer для бесконечной прокрутки
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadingRef = useRef(false);
    const elementRef = useRef<HTMLElement | null>(null);

    const lastPage = data?.[data.length - 1];
    const isEmpty = Array.isArray(lastPage) ? lastPage.length === 0 : !lastPage;
    const canLoadMore = !isEmpty && !isLoading && !isValidating;

    const useObserver = useCallback((element: HTMLElement | null) => {
      elementRef.current = element;
    }, []);

    useEffect(() => {
      const element = elementRef.current;
      if (!element || !canLoadMore) {
        observerRef.current?.disconnect();
        return;
      }

      observerRef.current?.disconnect();
      observerRef.current = this.createIntersectionObserver(
        setSize,
        isLoading,
        loadingRef
      );
      observerRef.current.observe(element);

      return () => observerRef.current?.disconnect();
    }, [canLoadMore, isLoading, setSize]);

    return {
      ...swrState,
      data: mergedData,
      params: paramsRef.current,
      error: error ?? undefined,
      updateParams,
      useObserver,
    };
  }
}

export const dataPaginationService = DataPaginationService.getInstance();
 