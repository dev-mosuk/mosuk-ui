import type { ComboboxContextProps } from '@/components/combobox/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ComboboxContext = createContext<ComboboxContextProps | null>(null);
