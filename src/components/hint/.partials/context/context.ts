import { HintContextProps } from '@/components/texts/hint/.partials/context/context.interface';
import { createContext } from 'react';

export const HintContext = createContext<HintContextProps | null>(null);
