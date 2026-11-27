import type {
  SkeletonAnimation,
  SkeletonVariant,
} from '@/components/skeleton/.partials/enums/component.enums';
import type { ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type SkeletonProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  animation?: SkeletonAnimation | `${SkeletonAnimation}`;
  variant?: SkeletonVariant | `${SkeletonVariant}`;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'color' | 'className' | 'children'>;
