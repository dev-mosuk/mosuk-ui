import type { AutocompleteContextProps } from '@/components/autocomplete/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const AutocompleteContext =
  createContext<AutocompleteContextProps | null>(null);
