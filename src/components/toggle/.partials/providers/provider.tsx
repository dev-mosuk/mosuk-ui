'use client';

import { ToggleContext } from '@/components/toggle/.partials/providers/context/context';
import type { ToggleProviderProps } from '@/components/toggle/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function ToggleProvider({ children, size }: ToggleProviderProps) {
  const value = useMemo(() => ({ size }), [size]);

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}
