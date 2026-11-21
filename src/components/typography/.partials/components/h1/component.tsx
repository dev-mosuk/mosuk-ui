import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyH1Props } from '@/components/typography/.partials/components/h1/component.interface';
import React, { ElementType } from 'react';

export function TypographyH1<C extends ElementType = 'h1'>(
  props: TypographyH1Props<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='h1' />;
}
