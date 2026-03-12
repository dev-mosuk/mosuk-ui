import { createContext } from 'react';
import type { YMapZoomContextProps } from './context.interface';

export const YMapZoomContext = createContext<YMapZoomContextProps | null>(null);
