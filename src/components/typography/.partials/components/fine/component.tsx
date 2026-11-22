import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyFineProps } from '@/components/typography/.partials/components/fine/component.interface';
import React, { ElementType } from 'react';

export function TypographyFine<C extends ElementType = 'small'>(
  props: TypographyFineProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='fine' />;
}
