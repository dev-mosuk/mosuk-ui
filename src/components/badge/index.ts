import { Badge as Component } from '@/components/badge/.partials/components/component';
import type { BadgeProps } from '@/components/badge/.partials/components/component.interface';
import { BadgeDot } from '@/components/badge/.partials/components/dot/component';
import type { BadgeDotProps } from '@/components/badge/.partials/components/dot/component.interface';
import {
  BadgePlacement,
  BadgePress,
  BadgeVariant,
} from '@/components/badge/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Badge = Object.assign(Component, {
  Dot: BadgeDot,
  ENUMS: {
    Variant: BadgeVariant,
    Press: BadgePress,
    Placement: BadgePlacement,
  },
});

export namespace Badge {
  export type Props<C extends ElementType = 'span'> = BadgeProps<C>;

  export namespace Dot {
    export type Props<C extends ElementType = 'span'> = BadgeDotProps<C>;
  }
}
