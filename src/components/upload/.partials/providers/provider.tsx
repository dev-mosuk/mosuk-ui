'use client';

import { UploadContext } from '@/components/upload/.partials/providers/context/context';
import { UploadProviderProps } from '@/components/upload/.partials/providers/provider.interface';
import React from 'react';

export const UploadProvider = ({ id, children }: UploadProviderProps) => {
  return (
    <UploadContext.Provider
      value={{
        id,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
