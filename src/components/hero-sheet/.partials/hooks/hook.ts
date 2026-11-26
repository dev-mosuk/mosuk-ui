import type { UseHeroSheetProps } from '@/components/hero-sheet/.partials/hooks/hook.interface';
import { HeroSheetContext } from '@/components/hero-sheet/.partials/providers/context/context';
import { useContext } from 'react';

export function useHeroSheet(): UseHeroSheetProps {
  const context = useContext(HeroSheetContext);

  if (!context) {
    throw new Error('useHeroSheet must be used within HeroSheet');
  }

  return context;
}
