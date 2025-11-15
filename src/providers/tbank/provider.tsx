import Script from 'next/script';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TBankContext } from './context/context';
import { TBankProviderProps } from './provider.interface';

declare global {
  interface Window {
    PaymentIntegration: any;
  }
}

export const TBankProvider = ({ children }: TBankProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [integration, setIntegration] = useState<any | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  // Для автоматического retry
  const retryCountRef = useRef<number>(0);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxRetries = 3;
  const retryDelay = 5000; // 5 секунд

  const initializeIntegration = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (typeof window === 'undefined' || !window.PaymentIntegration) {
        throw new Error('T-Bank Payment Integration не загружен');
      }

      // Сохраняем экземпляр интеграции для использования в контексте
      setIntegration(window.PaymentIntegration);
      setIsLoading(false);
      setError(null);
      retryCountRef.current = 0; // Сбрасываем счетчик при успехе
    } catch (err) {
      // Автоматический retry
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current += 1;
        retryTimeoutRef.current = setTimeout(() => {
          initializeIntegration();
        }, retryDelay);

        setError(
          `Попытка ${retryCountRef.current}/${maxRetries}. Повтор через ${retryDelay / 1000}с...`
        );
      } else {
        setError('Не удалось загрузить T-Bank после 3 попыток');
        setIsLoading(false);
      }
    }
  }, []);

  const handleScriptLoad = useCallback(() => {
    setScriptLoaded(true);
  }, []);

  const handleScriptError = useCallback(() => {
    setError('Не удалось загрузить скрипт T-Bank');
    setIsLoading(false);
  }, []);

  // Проверяем, не загружен ли уже скрипт
  useEffect(() => {
    const isScriptAlreadyLoaded = typeof window !== 'undefined' && window.PaymentIntegration;

    if (isScriptAlreadyLoaded && !scriptLoaded) {
      setScriptLoaded(true);
    }
  }, [scriptLoaded]);

  // Инициализируем интеграцию когда скрипт загружен
  useEffect(() => {
    if (scriptLoaded || (typeof window !== 'undefined' && window.PaymentIntegration)) {
      initializeIntegration();
    }
  }, [scriptLoaded, initializeIntegration]);

  // Очистка таймера при размонтировании
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

  const isScriptAlreadyLoaded = typeof window !== 'undefined' && window.PaymentIntegration;

  return (
    <TBankContext.Provider value={contextValue}>
      {!isScriptAlreadyLoaded && (
        <Script
          src="https://integrationjs.tbank.ru/integration.js"
          strategy="afterInteractive"
          onLoad={handleScriptLoad}
          onError={handleScriptError}
        />
      )}

      {children}
    </TBankContext.Provider>
  );
};
