import { createContext } from 'react';
import { TBankContextProps } from './context.interface';

export const TBankContext = createContext<TBankContextProps | null>(null);
