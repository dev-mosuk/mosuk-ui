import type { TabsContextProps } from '@/components/tabs/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const TabsContext = createContext<TabsContextProps | null>(null);
