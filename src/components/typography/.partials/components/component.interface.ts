import type {
  TypographyAlign,
  TypographyAnimation,
  TypographyLineHeight,
  TypographyPress,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from '@/components/typography/.partials/enums/component.enums';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type TypographyProps<C = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: TypographyType | `${TypographyType}`;
  align?: TypographyAlign | `${TypographyAlign}`;
  weight?: TypographyWeight | `${TypographyWeight}`;
  lineHeight?: TypographyLineHeight | `${TypographyLineHeight}`;
  variant?: TypographyVariant | `${TypographyVariant}`;
  animation?: TypographyAnimation | `${TypographyAnimation}`;
  press?: TypographyPress | `${TypographyPress}` | false;
  isMuted?: boolean;
  isTruncate?: boolean;
  style?: CSSProperties;
  className?: string;
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  | 'as'
  | 'ref'
  | 'type'
  | 'color'
  | 'align'
  | 'style'
  | 'className'
  | 'onPointerDown'
  | 'children'
>;
