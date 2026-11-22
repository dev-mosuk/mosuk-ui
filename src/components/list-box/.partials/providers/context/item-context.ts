import type { ListBoxItemContextProps } from '@/components/list-box/.partials/providers/context/item-context.interface';
import { createContext } from 'react';

export const ListBoxItemContext = createContext<ListBoxItemContextProps | null>(
  null,
);
