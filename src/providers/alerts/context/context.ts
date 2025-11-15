import { createContext } from 'react';
import { AlertsContextProps } from './context.interface';

export const AlertsContext = createContext<AlertsContextProps | null>(null);