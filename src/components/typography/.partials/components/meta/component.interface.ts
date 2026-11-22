import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyMetaProps<C extends ElementType = 'p'> = Omit<
  TypographyProps<C>,
  'type'
>;
