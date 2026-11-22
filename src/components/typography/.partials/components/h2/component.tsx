import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyH2Props } from '@/components/typography/.partials/components/h2/component.interface';
import React, { ElementType } from 'react';

export function TypographyH2<C extends ElementType = 'h2'>(
  props: TypographyH2Props<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='h2' />;
}
