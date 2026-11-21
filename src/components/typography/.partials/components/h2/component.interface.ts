import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyH2Props<C extends ElementType = 'h2'> = Omit<
  TypographyProps<C>,
  'type'
>;
