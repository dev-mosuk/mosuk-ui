import type {
  TypographyAnimation,
  TypographyColor,
  TypographyPress,
  TypographyType,
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
  color?: TypographyColor | `${TypographyColor}`;
  animation?: TypographyAnimation | `${TypographyAnimation}`;
  press?: TypographyPress | `${TypographyPress}` | false;
  isMuted?: boolean;
  isTruncate?: boolean;
  onPointerDown?: PointerEventHandler<any>;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'type' | 'color' | 'onPointerDown'
>;
