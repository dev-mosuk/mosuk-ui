import type {
  CardAnimation,
  CardPress,
  CardVariant,
} from '@/components/card/.partials/enums/component.enums';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type CardOwnProps<C> = {
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

export type CardProps<C = 'div'> = CardOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'color'
    | 'width'
    | 'className'
    | 'style'
    | 'onPointerDown'
    | 'children'
  >;
