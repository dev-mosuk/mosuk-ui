import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyH3Props } from '@/components/typography/.partials/components/h3/component.interface';
import React, { ElementType } from 'react';

export function TypographyH3<C extends ElementType = 'h3'>(
  props: TypographyH3Props<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='h3' />;
}
