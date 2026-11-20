import { ToastsContextProps } from '@/providers/toasts/.partials/context/context.interface';
import { createContext } from 'react';

export const ToastsContext = createContext<ToastsContextProps | null>(null);
