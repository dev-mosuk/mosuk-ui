'use client';

import React, { useState } from 'react';
import { UploadContext } from './context/context';
import { UploadProviderProps } from './provider.interface';

export const UploadProvider = ({
  ...rest
}: UploadProviderProps) => {
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
