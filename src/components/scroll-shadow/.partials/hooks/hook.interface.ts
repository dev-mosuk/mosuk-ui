import type {
  ScrollShadowEdgeVisibility,
  ScrollShadowVisibility,
} from '@/components/scroll-shadow/.partials/components/component.interface';
import type { RefObject } from 'react';

export type UseScrollShadowProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  orientation: 'vertical' | 'horizontal';
  offset: number;
  visibility: ScrollShadowVisibility;
  isEnabled: boolean;
  onVisibilityChange?: (visibility: ScrollShadowEdgeVisibility) => void;
};
