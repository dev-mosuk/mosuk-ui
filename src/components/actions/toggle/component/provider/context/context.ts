import { createContext } from 'react';
import { ToggleContextProps } from './context.interface';

export const ToggleContext = createContext<ToggleContextProps | null>(null);
