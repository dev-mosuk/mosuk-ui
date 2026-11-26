import { Typography as Component } from '@/components/typography/.partials/components/component';
import type { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import {
  TypographyAlign,
  TypographyAnimation,
  TypographyLineHeight,
  TypographyPress,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from '@/components/typography/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Typography = Object.assign(Component, {
  ENUMS: {
    Type: TypographyType,
    Align: TypographyAlign,
    Weight: TypographyWeight,
    LineHeight: TypographyLineHeight,
    Variant: TypographyVariant,
    Animation: TypographyAnimation,
    Press: TypographyPress,
  },
});

export namespace Typography {
  export type Props<C extends ElementType = 'p'> = TypographyProps<C>;
}
