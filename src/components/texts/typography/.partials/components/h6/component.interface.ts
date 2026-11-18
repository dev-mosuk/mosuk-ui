import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyH6Props<C extends ElementType = 'h6'> = Omit<
  TypographyProps<C>,
  'type'
>;
