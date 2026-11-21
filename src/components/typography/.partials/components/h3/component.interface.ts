import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyH3Props<C extends ElementType = 'h3'> = Omit<
  TypographyProps<C>,
  'type'
>;
