import type { UseCodeThemeProps } from '@/components/code/.partials/hooks/hook.interface';
import { Theme } from '@/providers/theme/.partials/provider.enums';
import { useSyncExternalStore } from 'react';

function readTheme(): Theme {
  if (typeof document === 'undefined') {
    return Theme.Light;
  }

  return document.documentElement.getAttribute('data-theme') === Theme.Dark
    ? Theme.Dark
    : Theme.Light;
}

function subscribe(onStoreChange: () => void): () => void {
  if (typeof document === 'undefined') {
    return () => undefined;
  }

  const observer = new MutationObserver(onStoreChange);

  observer.observe(document.documentElement, {
    attributeFilter: ['data-theme'],
    attributes: true,
  });

  return () => observer.disconnect();
}

/** Resolves app theme from `html[data-theme]` without requiring ThemeProvider. */
export function useCodeTheme(): UseCodeThemeProps {
  return useSyncExternalStore(subscribe, readTheme, () => Theme.Light);
}
