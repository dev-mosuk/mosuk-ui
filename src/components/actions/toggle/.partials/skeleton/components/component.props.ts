import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type ToggleSkeletonProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;

  orientation?: 'horizontal' | 'vertical';
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'orientation'>;
