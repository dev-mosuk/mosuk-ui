import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type InputOtpSkeletonProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  slots?: number;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
