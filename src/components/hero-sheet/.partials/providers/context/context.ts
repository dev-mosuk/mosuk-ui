import type { HeroSheetContextProps } from '@/components/hero-sheet/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const HeroSheetContext = createContext<HeroSheetContextProps | null>(
  null,
);
