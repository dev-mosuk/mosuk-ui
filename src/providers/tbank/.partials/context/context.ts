import { TBankContextProps } from '@/providers/tbank/.partials/context/context.interface';
import { createContext } from 'react';

export const TBankContext = createContext<TBankContextProps | null>(null);
