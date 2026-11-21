import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyH6Props } from '@/components/typography/.partials/components/h6/component.interface';
import React, { ElementType } from 'react';

export function TypographyH6<C extends ElementType = 'h6'>(
  props: TypographyH6Props<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='h6' />;
}
