import type { TooltipContextProps } from '@/components/tooltip/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const TooltipContext = createContext<TooltipContextProps | null>(null);
