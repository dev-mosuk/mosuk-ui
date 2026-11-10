import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type YandexMapSkeletonProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref'>;
