import type {
  BadgePlacement,
  BadgePress,
  BadgeVariant,
} from '@/components/badge/.partials/enums/component.enums';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type BadgeDotProps<C = 'span'> = {
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
  PropsOf<C>,
  'as' | 'ref' | 'style' | 'className' | 'onPointerDown' | 'children'
>;
