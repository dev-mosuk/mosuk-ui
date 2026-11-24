import { TBankContext } from '@/providers/tbank/.partials/context/context';
import { TBankProviderProps } from '@/providers/tbank/.partials/provider.interface';
import React, { useCallback, useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    PaymentIntegration: any;
  }
}

const TBANK_SCRIPT_SRC = 'https://integrationjs.tbank.ru/integration.js';

export const TBankProvider = ({ children }: TBankProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [integration, setIntegration] = useState<any | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const scriptInjectedRef = useRef<boolean>(false);
  const retryCountRef = useRef<number>(0);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxRetries = 3;
  const retryDelay = 5000;

  const initializeIntegration = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (typeof window === 'undefined' || !window.PaymentIntegration) {
        throw new Error('T-Bank Payment Integration не загружен');
      }

      setIntegration(window.PaymentIntegration);
      setIsLoading(false);
      setError(null);
      retryCountRef.current = 0;
    } catch {
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current += 1;
        retryTimeoutRef.current = setTimeout(() => {
          initializeIntegration();
        }, retryDelay);

        setError(
          `Попытка ${retryCountRef.current}/${maxRetries}. Повтор через ${retryDelay / 1000}с...`,
        );
      } else {
        setError('Не удалось загрузить T-Bank после 3 попыток');
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.PaymentIntegration) {
      setScriptLoaded(true);
      return;
    }

    if (scriptInjectedRef.current) {
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TBANK_SCRIPT_SRC}"]`,
    );

    if (existing) {
      scriptInjectedRef.current = true;
      if (window.PaymentIntegration) {
        setScriptLoaded(true);
      } else {
        existing.addEventListener('load', () => setScriptLoaded(true));
        existing.addEventListener('error', () => {
          setError('Не удалось загрузить скрипт T-Bank');
          setIsLoading(false);
        });
      }
      return;
    }

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = TBANK_SCRIPT_SRC;
      script.async = true;

      script.onload = () => {
        setScriptLoaded(true);
      };

      script.onerror = () => {
        setError('Не удалось загрузить скрипт T-Bank');
        setIsLoading(false);
      };

      document.head.appendChild(script);
      scriptInjectedRef.current = true;
    };

    if ('requestIdleCallback' in window) {
      (
        window as Window & {
          requestIdleCallback: (
            callback: () => void,
            options?: { timeout: number },
          ) => number;
        }
      ).requestIdleCallback(loadScript, { timeout: 5000 });
    } else {
      setTimeout(loadScript, 0);
    }
  }, []);

  useEffect(() => {
    if (
      scriptLoaded ||
      (typeof window !== 'undefined' && window.PaymentIntegration)
    ) {
      initializeIntegration();
    }
  }, [scriptLoaded, initializeIntegration]);

  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  const contextValue = {
    integration,
    isLoading,
    error,
  };

  return (
    <TBankContext.Provider value={contextValue}>{children}</TBankContext.Provider>
  );
};
