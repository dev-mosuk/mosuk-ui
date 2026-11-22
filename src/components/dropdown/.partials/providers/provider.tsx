import { DropdownContext } from '@/components/dropdown/.partials/providers/context/context';
import type { DropdownProviderProps } from '@/components/dropdown/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function DropdownProvider({
  children,
  keepMounted,
  container,
}: DropdownProviderProps) {
  const value = useMemo(
    () => ({
      keepMounted,
      container,
    }),
    [keepMounted, container],
  );

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}
