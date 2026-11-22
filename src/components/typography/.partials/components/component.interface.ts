import type {
  TypographyAlign,
  TypographyColor,
  TypographyLineHeight,
  TypographySize,
  TypographyType,
  TypographyWeight,
} from '@/components/typography/.partials/enums/component.enums';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TypographyProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: TypographyType | `${TypographyType}`;
  align?: TypographyAlign | `${TypographyAlign}`;
  size?: TypographySize | `${TypographySize}`;
  color?: TypographyColor | `${TypographyColor}`;
  weight?: TypographyWeight | `${TypographyWeight}`;
  lineHeight?: TypographyLineHeight | `${TypographyLineHeight}`;
  muted?: boolean;
  truncate?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'type' | 'color' | 'size'>;
