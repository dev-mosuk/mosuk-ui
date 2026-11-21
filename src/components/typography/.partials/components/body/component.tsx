import { TypographyBodyProps } from '@/components/typography/.partials/components/body/component.interface';
import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import React, { ElementType } from 'react';

export function TypographyBody<C extends ElementType = 'p'>(
  props: TypographyBodyProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='body' />;
}
