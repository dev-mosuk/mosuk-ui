import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type SwiperNavigationDotProps<C = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isActive?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  type?: string;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'className' | 'style' | 'children' | 'type'
>;
