'use client';

import { SelectContext } from '@/components/select/.partials/providers/context/context';
import type { SelectProviderProps } from '@/components/select/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function SelectProvider({
  children,
  placeholder,
  isEmpty,
  clear,
  clearMounted,
}: SelectProviderProps) {
  const value = useMemo(
    () => ({
      placeholder,
      isEmpty,
      clear,
      clearMounted,
    }),
    [placeholder, isEmpty, clear, clearMounted],
  );

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}
