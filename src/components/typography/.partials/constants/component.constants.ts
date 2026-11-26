import {
  TypographyAlign,
  TypographyAnimation,
  TypographyPress,
  TypographyType,
  TypographyVariant,
} from '@/components/typography/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const TYPOGRAPHY_DEFAULT_TYPE = TypographyType.P2;
export const TYPOGRAPHY_DEFAULT_VARIANT = TypographyVariant.Secondary;
export const TYPOGRAPHY_DEFAULT_ALIGN = TypographyAlign.Start;
export const TYPOGRAPHY_DEFAULT_ANIMATION = TypographyAnimation.None;
export const TYPOGRAPHY_DEFAULT_PRESS = TypographyPress.None;

export const TYPOGRAPHY_DEFAULT_ELEMENT_BY_TYPE: Record<
  TypographyType,
  ElementType
> = {
  [TypographyType.H1]: 'h1',
  [TypographyType.H2]: 'h2',
  [TypographyType.H3]: 'h3',
  [TypographyType.H4]: 'h4',
  [TypographyType.H5]: 'h5',
  [TypographyType.H6]: 'h6',
  [TypographyType.P1]: 'p',
  [TypographyType.P2]: 'p',
  [TypographyType.P3]: 'p',
  [TypographyType.P4]: 'p',
  [TypographyType.P5]: 'small',
  [TypographyType.P6]: 'small',
};
