import { ThemeContext } from '@/providers/theme/.partials/context/context';
import { Theme } from '@/providers/theme/.partials/provider.enums';
import type { ThemeProviderProps } from '@/providers/theme/.partials/provider.interface';
import { storageLocalService } from '@/services/storage-local';
import React, { useEffect, useMemo, useState } from 'react';

const DEFAULT_STORAGE_KEY = 'mosuk-ui-theme';

function isTheme(value: unknown): value is Theme {
  return value === Theme.Light || value === Theme.Dark;
}

function snapshotSystemTheme(fallback: Theme): Theme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return fallback;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.Dark
    : Theme.Light;
}

function resolveInitialTheme(
  storageKey: string,
  defaultTheme: Theme | `${Theme}`,
): Theme {
  const stored = storageLocalService.read<string>(storageKey);

  if (isTheme(stored)) {
    return stored;
  }

  const fallback = isTheme(defaultTheme) ? defaultTheme : Theme.Light;
  const theme = snapshotSystemTheme(fallback);
  storageLocalService.create(storageKey, theme);

  return theme;
}

function applyThemeToDocument(theme: Theme): void {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({
  children,
  storageKey = DEFAULT_STORAGE_KEY,
  defaultTheme = Theme.Light,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() =>
    resolveInitialTheme(storageKey, defaultTheme),
  );

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      const next = storageLocalService.read<string>(storageKey);

      if (isTheme(next)) {
        setThemeState(next);
        return;
      }

      const fallback = isTheme(defaultTheme) ? defaultTheme : Theme.Light;
      setThemeState(snapshotSystemTheme(fallback));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [storageKey, defaultTheme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (next: Theme | `${Theme}`) => {
        if (!isTheme(next)) {
          return;
        }

        storageLocalService.create(storageKey, next);
        setThemeState(next);
      },
    }),
    [theme, storageKey],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
