import type {
  HeroSheetDirection,
  HeroSheetVariant,
} from '@/components/hero-sheet/.partials/enums/component.enums';
import type { ReactNode } from 'react';

export type HeroSheetProviderProps = {
  direction: HeroSheetDirection | `${HeroSheetDirection}`;
  variant: HeroSheetVariant | `${HeroSheetVariant}`;
  openThreshold: number;
  closeThreshold: number;
  progress?: number;
  isDisabled: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onProgressChange?: (progress: number) => void;
  children: ReactNode;
};
