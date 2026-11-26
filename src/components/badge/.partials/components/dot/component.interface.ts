import type {
  BadgePlacement,
  BadgePress,
  BadgeVariant,
} from '@/components/badge/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  PointerEventHandler,
  ReactNode,
  Ref,
} from 'react';

export type BadgeDotProps<C extends ElementType = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: BadgeVariant | `${BadgeVariant}`;
  press?: BadgePress | `${BadgePress}` | false;
  placement?: BadgePlacement | `${BadgePlacement}`;
  style?: CSSProperties;
  className?: string;
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'style' | 'className' | 'onPointerDown' | 'children'
>;
