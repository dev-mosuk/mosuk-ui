import type {
  CardAnimation,
  CardPress,
  CardVariant,
} from '@/components/card/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  PointerEventHandler,
  ReactNode,
  Ref,
} from 'react';

type CardOwnProps<C extends ElementType> = {
  as?: C;
  ref?: Ref<any>;
  variant?: CardVariant | `${CardVariant}`;
  animation?: CardAnimation | `${CardAnimation}`;
  press?: CardPress | `${CardPress}` | false;
  isDisabled?: boolean;
  style?: CSSProperties;
  className?: string;
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
};

export type CardProps<C extends ElementType = 'div'> = CardOwnProps<C> &
  Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'width'
    | 'className'
    | 'style'
    | 'onPointerDown'
    | 'children'
  >;
