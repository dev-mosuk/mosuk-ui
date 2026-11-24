import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type SwiperNavigationDotProps<C extends ElementType = 'button'> = {
  as?: C;
  ref?: Ref<any>;
  index: number;
  isActive?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<C>,
  'as' | 'ref' | 'className' | 'style' | 'children'
>;
