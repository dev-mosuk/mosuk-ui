import { AlertsContextProps } from '@/providers/alerts/context/context.interface';
import { createContext } from 'react';

export const AlertsContext = createContext<AlertsContextProps | null>(null);
