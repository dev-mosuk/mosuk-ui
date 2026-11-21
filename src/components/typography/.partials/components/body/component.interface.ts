import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyBodyProps<C extends ElementType = 'p'> = Omit<
  TypographyProps<C>,
  'type'
>;
