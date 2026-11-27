import type { CSSProperties, MouseEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type SwiperPrevProps<C = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: MouseEventHandler<any>;
  type?: string;
} & Omit<
  PropsOf<C>,
  | 'as'
  | 'ref'
  | 'disabled'
  | 'className'
  | 'style'
  | 'children'
  | 'onClick'
  | 'type'
>;
