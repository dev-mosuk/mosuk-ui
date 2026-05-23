import { UseStorageLocalProps } from '@/hooks/storage/local/hook.interface';
import { storageLocalService } from '@/services/storage/local/index';
import { useCallback, useEffect, useState } from 'react';

export function useStorageLocal<T = any>(key: string): UseStorageLocalProps<T> {
  const [value, setValue] = useState<T | null>(() => {
    return storageLocalService.read<T>(key);
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setValue(storageLocalService.read<T>(key));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  const create = useCallback(
    (newValue: T) => {
      storageLocalService.create(key, newValue);
      setValue(newValue);
    },
    [key],
  );

  const read = useCallback(() => {
    const currentValue = storageLocalService.read<T>(key);
    setValue(currentValue);

    return currentValue;
  }, [key]);

  const update = useCallback(
    (newValue: Partial<T>) => {
      storageLocalService.update(key, newValue);
      setValue(storageLocalService.read<T>(key));
    },
    [key],
  );

  const deleteValue = useCallback(() => {
    storageLocalService.delete(key);
    setValue(null);
  }, [key]);

  return {
    value,
    create,
    read,
    update,
    delete: deleteValue,
  };
}
