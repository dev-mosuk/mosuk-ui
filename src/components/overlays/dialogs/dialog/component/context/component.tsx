import { createContext } from 'react';
import { ContextProps } from './component.interface';

export const Context = createContext<ContextProps | undefined>(undefined);
