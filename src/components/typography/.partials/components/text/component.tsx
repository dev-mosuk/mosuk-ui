import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyTextProps } from '@/components/typography/.partials/components/text/component.interface';
import React, { ElementType } from 'react';

export function TypographyText<C extends ElementType = 'p'>(
  props: TypographyTextProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='text' />;
}
