import type {
  HeroSheetDirection,
  HeroSheetVariant,
} from '@/components/hero-sheet/.partials/enums/component.enums';
import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

type HeroSheetOwnProps = {
  as?: ElementType;
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
};

export type HeroSheetProps<C extends ElementType = 'div'> = HeroSheetOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof HeroSheetOwnProps>;
