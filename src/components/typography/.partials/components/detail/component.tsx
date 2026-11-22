import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyDetailProps } from '@/components/typography/.partials/components/detail/component.interface';
import React, { ElementType } from 'react';

export function TypographyDetail<C extends ElementType = 'p'>(
  props: TypographyDetailProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='detail' />;
}
