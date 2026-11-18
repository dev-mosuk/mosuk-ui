import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyH1Props<C extends ElementType = 'h1'> = Omit<
  TypographyProps<C>,
  'type'
>;
