import { TypographyCaptionProps } from '@/components/typography/.partials/components/caption/component.interface';
import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import React, { ElementType } from 'react';

export function TypographyCaption<C extends ElementType = 'small'>(
  props: TypographyCaptionProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='caption' />;
}
