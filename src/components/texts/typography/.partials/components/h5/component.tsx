import { Typography } from '@/components/texts/typography/.partials/components/component';
import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { TypographyH5Props } from '@/components/texts/typography/.partials/components/h5/component.interface';
import React, { ElementType } from 'react';

export function TypographyH5<C extends ElementType = 'h5'>(
  props: TypographyH5Props<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='h5' />;
}
