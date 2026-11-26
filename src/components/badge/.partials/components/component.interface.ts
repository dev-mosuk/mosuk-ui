import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type BadgeProps<C extends ElementType = 'span'> = {
  as?: C;
  ref?: Ref<any>;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'style' | 'className' | 'children'
>;
