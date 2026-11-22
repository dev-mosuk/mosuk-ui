import {
  TypographyAlign,
  TypographyType,
} from '@/components/typography/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const TYPOGRAPHY_DEFAULT_TYPE = TypographyType.Text;
export const TYPOGRAPHY_DEFAULT_ALIGN = TypographyAlign.Start;

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
  [TypographyType.Lead]: 'p',
  [TypographyType.Text]: 'p',
  [TypographyType.Detail]: 'p',
  [TypographyType.Meta]: 'p',
  [TypographyType.Caption]: 'small',
  [TypographyType.Fine]: 'small',
};
