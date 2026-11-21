import { Typography } from '@/components/texts/typography/.partials/components/component';
import { TypographyProps } from '@/components/texts/typography/.partials/components/component.interface';
import { TypographyDescriptionProps } from '@/components/texts/typography/.partials/components/description/component.interface';
import React, { ElementType } from 'react';

export function TypographyDescription<C extends ElementType = 'p'>(
  props: TypographyDescriptionProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='body-sm' />;
}
