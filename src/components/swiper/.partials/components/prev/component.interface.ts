import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type SwiperPrevProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'disabled' | 'className' | 'style' | 'children'
>;
