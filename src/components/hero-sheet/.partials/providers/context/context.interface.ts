import type {
  HeroSheetDirection,
  HeroSheetVariant,
} from '@/components/hero-sheet/.partials/enums/component.enums';
import type { RefObject } from 'react';

export type HeroSheetContextProps = {
  direction: HeroSheetDirection | `${HeroSheetDirection}`;
  variant: HeroSheetVariant | `${HeroSheetVariant}`;
  isDisabled: boolean;
  progress: number;
  isOpen: boolean;
  isSwiping: boolean;
  stageRef: RefObject<HTMLDivElement | null>;
  rootRef: RefObject<HTMLDivElement | null>;
  setIsSwiping: (isSwiping: boolean) => void;
  getTravelSize: () => number;
  getScrollPos: () => number;
  setScrollPos: (value: number, behavior?: ScrollBehavior) => void;
  requestSettle: (velocity?: number) => void;
};
