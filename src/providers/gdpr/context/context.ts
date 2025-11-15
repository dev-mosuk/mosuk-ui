import { createContext } from 'react';
import { GDPRContextProps } from './context.interface';

export const GDPRContext = createContext<GDPRContextProps | null>(null);
