import { Skeleton as Component } from '@/components/skeleton/.partials/components/component';
import type { SkeletonProps as ComponentProps } from '@/components/skeleton/.partials/components/component.interface';
import {
  SkeletonAnimation,
  SkeletonVariant,
} from '@/components/skeleton/.partials/enums/component.enums';

export const Skeleton = Object.assign(Component, {
  ENUMS: {
    Animation: SkeletonAnimation,
    Variant: SkeletonVariant,
  },
});

export namespace Skeleton {
  export type Props<C = 'div'> = ComponentProps<C>;
}
