import type { TooltipContextProps } from '@/components/tooltip/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface TooltipProviderProps extends TooltipContextProps {
  children?: ReactNode;
}
