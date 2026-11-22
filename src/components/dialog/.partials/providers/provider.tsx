import { DialogContext } from '@/components/dialog/.partials/providers/context/context';
import type { DialogProviderProps } from '@/components/dialog/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function DialogProvider({
  children,
  keepMounted,
  container,
}: DialogProviderProps) {
  const value = useMemo(
    () => ({
      keepMounted,
      container,
    }),
    [keepMounted, container],
  );

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}
