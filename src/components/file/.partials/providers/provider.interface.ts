import type { ReactNode } from 'react';

export type FileProviderProps = {
  children: ReactNode;
  name?: string | null;
  extension?: string | null;
};
