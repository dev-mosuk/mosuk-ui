'use client';

import { FileContext } from '@/components/file/.partials/providers/context/context';
import type { FileLoadStatus } from '@/components/file/.partials/providers/context/context.interface';
import type { FileProviderProps } from '@/components/file/.partials/providers/provider.interface';
import { parseFileExtension } from '@/components/file/.partials/utilities/parse-file-extension';
import React, { useMemo, useState } from 'react';

function normalizeExtension(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const trimmed = value.trim().replace(/^\./, '').toLowerCase();

  return trimmed || null;
}

export function FileProvider({
  children,
  name,
  extension: extensionProp,
}: FileProviderProps) {
  const [status, setStatus] = useState<FileLoadStatus>('idle');
  const [src, setSrc] = useState<string | null>(null);

  const extension = useMemo(() => {
    const explicit = normalizeExtension(extensionProp);

    if (explicit) {
      return explicit;
    }

    if (name) {
      return parseFileExtension(name);
    }

    if (src) {
      return parseFileExtension(src);
    }

    return null;
  }, [extensionProp, name, src]);

  const value = useMemo(
    () => ({
      status,
      setStatus,
      src,
      setSrc,
      name: name ?? null,
      extension,
    }),
    [extension, name, src, status],
  );

  return (
    <FileContext.Provider value={value}>{children}</FileContext.Provider>
  );
}
