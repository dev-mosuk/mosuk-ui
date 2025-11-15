import { createContext } from 'react';
import { TabbarTabsContextProps } from './component.interface';

export const TabbarTabsContext = createContext<TabbarTabsContextProps | null>(null);
