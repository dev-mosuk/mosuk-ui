import type { MultiSelectContextProps } from '@/components/multi-select/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const MultiSelectContext =
  createContext<MultiSelectContextProps | null>(null);
