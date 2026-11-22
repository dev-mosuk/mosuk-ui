import type { ListBoxContextProps } from '@/components/list-box/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface ListBoxProviderProps extends ListBoxContextProps {
  children?: ReactNode;
}
