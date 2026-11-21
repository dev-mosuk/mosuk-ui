import { TypographyCodeProps } from '@/components/typography/.partials/components/code/component.interface';
import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import React, { ElementType } from 'react';

export function TypographyCode<C extends ElementType = 'code'>(
  props: TypographyCodeProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='code' />;
}
