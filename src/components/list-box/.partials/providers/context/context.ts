import type { ListBoxContextProps } from '@/components/list-box/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ListBoxContext = createContext<ListBoxContextProps | null>(null);
