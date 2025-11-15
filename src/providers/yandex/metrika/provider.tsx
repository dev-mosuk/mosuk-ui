import React, { useEffect, useRef, useState } from 'react';
import { YandexMetrikaContext } from './context/context';
import { YandexMetrikaProviderProps } from './provider.interface';

declare global {
  interface Window {
    ym?: {
      (...args: any[]): void;
      a?: any[];
      l?: number;
    };
  }
}

const isBot = (): boolean => {
  if (typeof window === 'undefined') return true;
  const userAgent = navigator.userAgent.toLowerCase();
  const botPatterns = ['googlebot', 'yandexbot'];
  return botPatterns.some((pattern) => userAgent.includes(pattern));
};

export const YandexMetrikaProvider = ({
  children,
  id,
  settings,
}: YandexMetrikaProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const scriptInjectedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!id || isBot() || scriptInjectedRef.current) return;

    // Ensure ecommerce data container exists per Yandex Metrika docs
    try {
      const ecommerceOpt = (settings as any)?.ecommerce;
      let containerName: string | null = null;
      if (ecommerceOpt === true) {
        containerName = 'dataLayer';
      } else if (typeof ecommerceOpt === 'string' && ecommerceOpt.trim()) {
        containerName = ecommerceOpt.trim();
      }
      if (containerName && typeof window !== 'undefined') {
        (window as any)[containerName] = (window as any)[containerName] || [];
      }
    } catch {
      // no-op
    }

    const loadScript = () => {
      // Создаем внешний скрипт напрямую
      const script = document.createElement('script');
      script.src = 'https://mc.yandex.ru/metrika/tag.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';

      script.onload = () => {
        // Инициализируем метрику после загрузки
        if (window.ym) {
          window.ym(parseInt(id, 10), 'init', settings);
          setIsLoading(false);
        }
      };

      script.onerror = () => {
        setIsLoading(false);
      };

      if (!window.ym) {
        const ymFunc = function (...args: any[]) {
          (ymFunc.a = ymFunc.a || []).push(args);
        } as any;
        ymFunc.a = [];
        ymFunc.l = Date.now();
        window.ym = ymFunc;
      }

      document.head.appendChild(script);
      scriptInjectedRef.current = true;
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadScript, { timeout: 5000 });
    } else {
      setTimeout(loadScript, 5000);
    }
  }, [id, settings]);

  const contextValue = {
    ym: typeof window !== 'undefined' ? window.ym || null : null,
    id: !isLoading ? id : null,
    isLoading,
  };

  return (
    <YandexMetrikaContext.Provider value={contextValue}>{children}</YandexMetrikaContext.Provider>
  );
};

