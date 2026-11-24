import { Skeleton as Component } from '@/components/skeleton/.partials/components/component';
import type { SkeletonProps as ComponentProps } from '@/components/skeleton/.partials/components/component.interface';
import {
  SkeletonAnimation,
  SkeletonVariant,
} from '@/components/skeleton/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Skeleton = Object.assign(Component, {
  ENUMS: {
    Animation: SkeletonAnimation,
    Variant: SkeletonVariant,
  },
});

export namespace Skeleton {
  export type Props<C extends ElementType = 'div'> = ComponentProps<C>;
}
