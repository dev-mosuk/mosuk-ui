import { HintContextProps } from '@/components/hint/.partials/context/context.interface';
import { createContext } from 'react';

export const HintContext = createContext<HintContextProps | null>(null);
