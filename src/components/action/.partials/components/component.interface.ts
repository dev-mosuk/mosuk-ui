import type {
  ActionAnimation,
  ActionPress,
} from '@/components/action/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  PointerEventHandler,
  ReactNode,
  Ref,
} from 'react';

type ActionOwnProps<C extends ElementType> = {
  as?: C;
  ref?: Ref<any>;
  animation?: ActionAnimation | `${ActionAnimation}`;
  press?: ActionPress | `${ActionPress}` | false;
  isDisabled?: boolean;
  style?: CSSProperties;
  className?: string;
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
};

export type ActionProps<C extends ElementType = 'div'> = ActionOwnProps<C> &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'className'
    | 'style'
    | 'onPointerDown'
    | 'children'
  >;
