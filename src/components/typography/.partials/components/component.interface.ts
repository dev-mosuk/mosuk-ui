import type {
  TypographyAlign,
  TypographyAnimation,
  TypographyLineHeight,
  TypographyPress,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from '@/components/typography/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PointerEventHandler,
  Ref,
} from 'react';

export type TypographyProps<C extends ElementType = 'p'> = {
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
  onPointerDown?: PointerEventHandler<any>;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'type' | 'color' | 'align' | 'onPointerDown'
>;
