import type {
  ActionAnimation,
  ActionPress,
} from '@/components/action/.partials/enums/component.enums';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

type ActionOwnProps<C> = {
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

export type ActionProps<C = 'div'> = ActionOwnProps<C> &
  Omit<
    PropsOf<C>,
    'as' | 'ref' | 'className' | 'style' | 'onPointerDown' | 'children'
  >;
