'use client';

import { UploadContext } from '@/components/upload/.partials/providers/context/context';
import { UploadProviderProps } from '@/components/upload/.partials/providers/provider.interface';
import React, { useState } from 'react';

export const UploadProvider = ({ ...rest }: UploadProviderProps) => {
  const [ctxId, setCtxId] = useState<string>('');
  const [ctxName, setCtxName] = useState<string>('');

  return (
    <UploadContext.Provider
      value={{
        id: ctxId,
        setId: setCtxId,
        name: ctxName,
        setName: setCtxName,
      }}
    >
      {rest?.children}
    </UploadContext.Provider>
  );
};
