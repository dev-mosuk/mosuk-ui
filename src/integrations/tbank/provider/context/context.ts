import { TBankContextProps } from '@/integrations/tbank/provider/context/context.interface';
import { createContext } from 'react';

export const TBankContext = createContext<TBankContextProps | null>(null);
