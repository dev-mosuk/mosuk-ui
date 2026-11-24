import type { UseTabsProps } from '@/components/tabs/.partials/hooks/hook.interface';
import { TabsContext } from '@/components/tabs/.partials/providers/context/context';
import { useContext } from 'react';

export function useTabs(): UseTabsProps {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabs must be used within Tabs');
  }

  return context;
}
