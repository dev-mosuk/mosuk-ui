import { TypographyCommentProps } from '@/components/texts/typography/.partials/components/comment/component.interface';
import { Typography } from '@/components/texts/typography/.partials/components/component';
import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import React, { ElementType } from 'react';

export function TypographyComment<C extends ElementType = 'p'>(
  props: TypographyCommentProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='body-xs' />;
}
