import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type BadgeProps<C = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
} & Omit<PropsOf<C>, 'as' | 'ref' | 'style' | 'className' | 'children'>;
