import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyCodeProps<C extends ElementType = 'code'> = Omit<
  TypographyProps<C>,
  'type'
>;
