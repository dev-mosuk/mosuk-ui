import type { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type PopoverCloseProps<C = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'disabled' | 'color' | 'className' | 'style' | 'children'
>;
