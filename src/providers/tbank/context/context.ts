import { TBankContextProps } from '@/providers/tbank/context/context.interface';
import { createContext } from 'react';

export const TBankContext = createContext<TBankContextProps | null>(null);
