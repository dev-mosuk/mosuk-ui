import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type PopoverCloseProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'disabled' | 'color' | 'className' | 'style' | 'children'
>;
