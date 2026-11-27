import type { NavigationMenuContextProps } from '@/components/navigation-menu/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const NavigationMenuContext =
  createContext<NavigationMenuContextProps | null>(null);
