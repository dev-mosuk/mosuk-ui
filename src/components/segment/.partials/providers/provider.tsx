'use client';

import { SegmentContext } from '@/components/segment/.partials/providers/context/context';
import type { SegmentProviderProps } from '@/components/segment/.partials/providers/provider.interface';
import React, { useMemo } from 'react';

export function SegmentProvider({ children, size }: SegmentProviderProps) {
  const value = useMemo(() => ({ size }), [size]);

  return (
    <SegmentContext.Provider value={value}>{children}</SegmentContext.Provider>
  );
}
