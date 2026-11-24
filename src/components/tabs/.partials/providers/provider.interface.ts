import type { TabsContextProps } from '@/components/tabs/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface TabsProviderProps {
  children?: ReactNode;
  size?: TabsContextProps['size'];
  orientation: TabsContextProps['orientation'];
  variant: TabsContextProps['variant'];
  value: TabsContextProps['value'];
  setValue: TabsContextProps['setValue'];
  activateOnFocus?: TabsContextProps['activateOnFocus'];
  loopFocus?: TabsContextProps['loopFocus'];
}
