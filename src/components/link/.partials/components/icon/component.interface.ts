import type { PropsOf } from '@/types/props-of';
import type {
  CSSProperties,
  ElementType,
  ReactNode,
  Ref } from 'react';

type LinkIconOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export type LinkIconProps<C = 'span'> =
  LinkIconOwnProps<C> &
    Omit<PropsOf<C>, 'as' | 'ref' | 'style' | 'className' | 'children'>;
