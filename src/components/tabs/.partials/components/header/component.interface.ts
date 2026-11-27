import { CSSProperties, MouseEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type TabsHeaderProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  activateOnFocus?: boolean;
  loopFocus?: boolean;
  className?: string;
  style?: CSSProperties;
  onClickCapture?: MouseEventHandler<any>;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  | 'as'
  | 'ref'
  | 'activateOnFocus'
  | 'loopFocus'
  | 'className'
  | 'style'
  | 'onClickCapture'
  | 'children'
>;
