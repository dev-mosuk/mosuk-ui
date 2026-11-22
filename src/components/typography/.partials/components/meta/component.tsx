import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyMetaProps } from '@/components/typography/.partials/components/meta/component.interface';
import React, { ElementType } from 'react';

export function TypographyMeta<C extends ElementType = 'p'>(
  props: TypographyMetaProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='meta' />;
}
