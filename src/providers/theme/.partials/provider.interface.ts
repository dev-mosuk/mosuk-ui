import type { Theme } from '@/providers/theme/.partials/provider.enums';
import type { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
  storageKey?: string;
  defaultTheme?: Theme | `${Theme}`;
}
