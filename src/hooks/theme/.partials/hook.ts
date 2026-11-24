import type { UseThemeProps } from '@/hooks/theme/.partials/hook.interface';
import { ThemeContext } from '@/providers/theme/.partials/context/context';
import { useContext } from 'react';

export function useTheme(): UseThemeProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within <ThemeProvider>');
  }

  return context;
}
