import { createContext } from 'react';
import { InputContextProps } from './context.interface';

export const InputContext = createContext<InputContextProps | null>(null);
