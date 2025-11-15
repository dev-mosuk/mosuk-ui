import React, { useCallback, useEffect, useState } from 'react';
import { gdprService } from '../../services/gdpr/service';
import { GDPR } from '../../services/gdpr/service.interface';
import { GDPRContext } from './context/context';
import { GDPRProviderProps } from './provider.interface';

export const GDPRProvider = ({ children }: GDPRProviderProps) => {
  const [gdpr, setGDPR] = useState<GDPR | null>(gdprService.read());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setIsLoading(true);

      const existingGDPR = gdprService.read();

      if (existingGDPR) {
        setGDPR(existingGDPR);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const create = useCallback((gdprData: GDPR) => {
    gdprService.create(gdprData);
    setGDPR(gdprData);
  }, []);

  const update = useCallback((data: GDPR) => {
    gdprService.update(data);
    setGDPR(data);
  }, []);

  const deleteGDPR = useCallback(() => {
    gdprService.delete();
    setGDPR(null);
  }, []);

  return (
    <GDPRContext.Provider
      value={{ gdpr, create, update, delete: deleteGDPR, isLoading, setIsLoading }}
    >
      {children}
    </GDPRContext.Provider>
  );
};
