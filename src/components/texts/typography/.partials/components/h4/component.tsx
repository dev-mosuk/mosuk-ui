import { Typography } from '@/components/texts/typography/.partials/components/component';
import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { TypographyH4Props } from '@/components/texts/typography/.partials/components/h4/component.interface';
import React, { ElementType } from 'react';

export function TypographyH4<C extends ElementType = 'h4'>(
  props: TypographyH4Props<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='h4' />;
}
