import type { PointerEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type HeroSheetContentHandleProps<C = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  onPointerDown?: PointerEventHandler<any>;
  onPointerMove?: PointerEventHandler<any>;
  onPointerUp?: PointerEventHandler<any>;
  onPointerCancel?: PointerEventHandler<any>;
  className?: string;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  | 'as'
  | 'ref'
  | 'onPointerDown'
  | 'onPointerMove'
  | 'onPointerUp'
  | 'onPointerCancel'
  | 'className'
  | 'children'
>;
