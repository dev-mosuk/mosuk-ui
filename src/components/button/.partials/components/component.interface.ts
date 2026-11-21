import type {
  ButtonPress,
  ButtonVariant,
  ButtonWidth,
} from '@/components/button/.partials/enums/component.enums';
import type { PropsOf } from '@/components/button/.partials/utilities/props-of';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

type ButtonOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  variant?: ButtonVariant | `${ButtonVariant}`;
  size?: number;
  width?: ButtonWidth | `${ButtonWidth}`;
  press?: ButtonPress | `${ButtonPress}` | false;
  isPending?: boolean;
  isLoading?: boolean;
  className?: string;
  style?: CSSProperties;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onPointerDown?: PointerEventHandler<any>;
  children?: ReactNode;
};

export type ButtonProps<C = 'button'> = ButtonOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'width'
    | 'className'
    | 'style'
    | 'disabled'
    | 'type'
    | 'onPointerDown'
    | 'children'
  >;
