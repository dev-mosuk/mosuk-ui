import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyH4Props<C extends ElementType = 'h4'> = Omit<
  TypographyProps<C>,
  'type'
>;
