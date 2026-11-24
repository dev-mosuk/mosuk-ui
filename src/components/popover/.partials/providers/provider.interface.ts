import type { PopoverContextProps } from '@/components/popover/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface PopoverProviderProps extends PopoverContextProps {
  children?: ReactNode;
}
