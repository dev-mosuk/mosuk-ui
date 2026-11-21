import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyDescriptionProps } from '@/components/typography/.partials/components/description/component.interface';
import React, { ElementType } from 'react';

export function TypographyDescription<C extends ElementType = 'p'>(
  props: TypographyDescriptionProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='body-sm' />;
}
