import type { ScrollShadowVariant } from '@/components/scroll-shadow/.partials/enums/component.enums';
import type { ComponentPropsWithoutRef, Ref } from 'react';

export type ScrollShadowVisibility =
  | 'auto'
  | 'both'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'none';

export type ScrollShadowEdgeVisibility = Exclude<
  ScrollShadowVisibility,
  'auto'
>;

export type ScrollShadowProps = {
  ref?: Ref<HTMLDivElement>;
  orientation?: 'vertical' | 'horizontal';
  size?: number;
  offset?: number;
  scrollbar?: number;
  isEnabled?: boolean;
  visibility?: ScrollShadowVisibility;
  variant?: ScrollShadowVariant | `${ScrollShadowVariant}`;
  onVisibilityChange?: (visibility: ScrollShadowEdgeVisibility) => void;
} & Omit<ComponentPropsWithoutRef<'div'>, 'ref'>;
