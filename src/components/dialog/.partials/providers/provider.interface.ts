import type { DialogContextProps } from '@/components/dialog/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface DialogProviderProps extends DialogContextProps {
  children?: ReactNode;
}
