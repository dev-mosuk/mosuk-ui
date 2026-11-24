import type { Theme } from '@/providers/theme/.partials/provider.enums';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme | `${Theme}`) => void;
}
