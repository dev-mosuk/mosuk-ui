import type {
  SkeletonAnimation,
  SkeletonVariant,
} from '@/components/skeleton/.partials/enums/component.enums';
import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type SkeletonProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  animation?: SkeletonAnimation | `${SkeletonAnimation}`;
  variant?: SkeletonVariant | `${SkeletonVariant}`;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'color'>;
