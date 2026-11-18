import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyH5Props<C extends ElementType = 'h5'> = Omit<
  TypographyProps<C>,
  'type'
>;
