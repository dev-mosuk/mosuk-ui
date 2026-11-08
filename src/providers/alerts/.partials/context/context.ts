import { AlertsContextProps } from '@/providers/alerts/.partials/context/context.interface';
import { createContext } from 'react';

export const AlertsContext = createContext<AlertsContextProps | null>(null);
