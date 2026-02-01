import { useCallback, useEffect, useState } from 'react';
import { StorageCookieService } from '../../../services/storage/cookie/service';
import { StorageCookieServiceConfig } from '../../../services/storage/cookie/service.interface';
import { UseStorageCookieProps } from './hook.interface';

const storageCookieService = StorageCookieService.getInstance();

export function useStorageCookie<T = any>(key: string): UseStorageCookieProps<T> {
  const [value, setValue] = useState<T | null>(() => {
    return storageCookieService.read<T>(key);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentValue = storageCookieService.read<T>(key);
      setValue(currentValue);
    }, 1000);

    return () => clearInterval(interval);
  }, [key]);

  const create = useCallback(
    (newValue: T, config?: Partial<StorageCookieServiceConfig>) => {
      storageCookieService.create(key, newValue, config);
      setValue(newValue);
    },
    [key]
  );

  const read = useCallback(() => {
    const currentValue = storageCookieService.read<T>(key);
    setValue(currentValue);
    return currentValue;
  }, [key]);

  const update = useCallback(
    (newValue: Partial<T>, config?: Partial<StorageCookieServiceConfig>) => {
      storageCookieService.update(key, newValue, config);
      setValue(storageCookieService.read<T>(key));
    },
    [key]
  );

  const deleteValue = useCallback(
    (config?: Partial<StorageCookieServiceConfig>) => {
      storageCookieService.delete(key, config);
      setValue(null);
    },
    [key]
  );

  return {
    value,
    create,
    read,
    update,
    delete: deleteValue,
  };
}
