import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { ElementType } from 'react';

export type TypographyCommentProps<C extends ElementType = 'p'> = Omit<
  TypographyProps<C>,
  'type'
>;
