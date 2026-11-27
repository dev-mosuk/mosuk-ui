import type { NavigationMenuContextProps } from '@/components/navigation-menu/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface NavigationMenuProviderProps extends NavigationMenuContextProps {
  children?: ReactNode;
}
