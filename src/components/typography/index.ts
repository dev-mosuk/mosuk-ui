import { Typography as Component } from '@/components/typography/.partials/components/component';
import type { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import {
  TypographyAnimation,
  TypographyColor,
  TypographyPress,
  TypographyType,
} from '@/components/typography/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Typography = Object.assign(Component, {
  ENUMS: {
    Type: TypographyType,
    Color: TypographyColor,
    Animation: TypographyAnimation,
    Press: TypographyPress,
  },
});

export namespace Typography {
  export type Props<C extends ElementType = 'p'> = TypographyProps<C>;
}
