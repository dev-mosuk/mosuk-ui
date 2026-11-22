import type { DropdownContextProps } from '@/components/dropdown/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface DropdownProviderProps extends DropdownContextProps {
  children?: ReactNode;
}
