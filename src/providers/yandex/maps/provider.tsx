import { ReactifiedModule } from '@yandex/ymaps3-types/reactify';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { YandexMapContext } from './context/context';
import { YandexMapProviderProps } from './provider.interface';

declare global {
  interface Window {
    ymaps3: typeof ymaps3;
  }
}

const isBot = (): boolean => {
  if (typeof window === 'undefined') return true;

  const userAgent = navigator.userAgent.toLowerCase();
  const botPatterns = ['googlebot', 'yandexbot'];
  return botPatterns.some((pattern) => userAgent.includes(pattern));
};

export const YandexMapProvider = ({
  apiKey,
  children,
}: YandexMapProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reactifiedApi, setReactifiedApi] = useState<ReactifiedModule<
    typeof ymaps3
  > | null>(null);
  const scriptInjectedRef = useRef<boolean>(false);
  const retryCountRef = useRef<number>(0);
  const maxRetries = 3;

  const initializeApi = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!window.ymaps3) {
        throw new Error('Yandex Maps API не загружен');
      }

      // Ждем готовности API
      await window.ymaps3.ready;

      // Импортируем и инициализируем reactify
      const ymaps3Reactify = await window.ymaps3.import(
        '@yandex/ymaps3-reactify',
      );
      const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
      const api = reactify.module(window.ymaps3);

      setReactifiedApi(api);
      setIsLoading(false);
      setError(null);
      retryCountRef.current = 0;
    } catch (err) {
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current += 1;
        setTimeout(() => {
          initializeApi();
        }, 2000);

        setError(
          `Попытка ${retryCountRef.current}/${maxRetries}. Повтор через 2с...`,
        );
      } else {
        setError('Не удалось загрузить карты после 3 попыток');
        setIsLoading(false);
      }
    }
  }, []);

  const loadMapsScript = useCallback(() => {
    if (scriptInjectedRef.current || !apiKey || isBot()) return;

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      initializeApi();
    };

    script.onerror = () => {
      setError('Не удалось загрузить скрипт Yandex Maps');
      setIsLoading(false);
    };

    document.head.appendChild(script);
    scriptInjectedRef.current = true;
  }, [apiKey, initializeApi]);

  useEffect(() => {
    // Если API уже загружен
    if (
      typeof window !== 'undefined' &&
      window.ymaps3 &&
      !scriptInjectedRef.current
    ) {
      scriptInjectedRef.current = true;
      initializeApi();
      return;
    }

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadMapsScript, { timeout: 5000 });
    } else {
      setTimeout(loadMapsScript, 5000);
    }
  }, [loadMapsScript]);

  const contextValue = {
    api: reactifiedApi,
    isLoading,
    error,
  };

  return (
    <YandexMapContext.Provider value={contextValue}>
      {children}
    </YandexMapContext.Provider>
  );
};
