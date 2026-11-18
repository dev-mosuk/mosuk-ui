import type { SelectContextProps } from '@/components/actions/select/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface SelectProviderProps extends SelectContextProps {
  children?: ReactNode;
}
