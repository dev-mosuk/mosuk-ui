import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyFineProps<C extends ElementType = 'small'> = Omit<
  TypographyProps<C>,
  'type'
>;
