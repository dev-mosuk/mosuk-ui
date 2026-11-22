import { Typography } from '@/components/typography/.partials/components/component';
import { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import { TypographyLeadProps } from '@/components/typography/.partials/components/lead/component.interface';
import React, { ElementType } from 'react';

export function TypographyLead<C extends ElementType = 'p'>(
  props: TypographyLeadProps<C>,
) {
  return <Typography {...(props as TypographyProps<C>)} type='lead' />;
}
