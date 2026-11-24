import { Theme } from '@/providers/theme/.partials/provider.enums';
import { ThemeProvider as BaseThemeProvider } from '@/providers/theme/.partials/provider';
import type { ThemeProviderProps } from '@/providers/theme/.partials/provider.interface';
import { createElement } from 'react';

export const ThemeProvider = Object.assign(
  (props: ThemeProviderProps) => createElement(BaseThemeProvider, props),
  {
    ENUMS: {
      Theme,
    },
  },
);

export namespace ThemeProvider {
  export type Props = ThemeProviderProps;
}

export { Theme };
export type { ThemeProviderProps };
