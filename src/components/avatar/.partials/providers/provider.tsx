'use client';

import { AvatarContext } from '@/components/avatar/.partials/providers/context/context';
import type { AvatarLoadStatus } from '@/components/avatar/.partials/providers/context/context.interface';
import type { AvatarProviderProps } from '@/components/avatar/.partials/providers/provider.interface';
import React, { useMemo, useState } from 'react';

export function AvatarProvider({ children }: AvatarProviderProps) {
  const [status, setStatus] = useState<AvatarLoadStatus>('idle');

  const value = useMemo(
    () => ({
      status,
      setStatus,
    }),
    [status],
  );

  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
}
