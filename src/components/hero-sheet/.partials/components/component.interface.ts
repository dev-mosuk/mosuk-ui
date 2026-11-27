import type {
  HeroSheetDirection,
  HeroSheetVariant,
} from '@/components/hero-sheet/.partials/enums/component.enums';
import type { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type HeroSheetOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  progress?: number;
  direction?: HeroSheetDirection | `${HeroSheetDirection}`;
  variant?: HeroSheetVariant | `${HeroSheetVariant}`;
  openThreshold?: number;
  closeThreshold?: number;
  isOpen?: boolean;
  isDisabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onProgressChange?: (progress: number) => void;
  children?: ReactNode;
  className?: string;
};

export type HeroSheetProps<C = 'div'> = HeroSheetOwnProps<C> &
  Omit<PropsOf<C>, keyof HeroSheetOwnProps<C>>;
