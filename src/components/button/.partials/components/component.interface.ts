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
  type?: 'button' | 'submit' | 'reset';
  isPending?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  style?: CSSProperties;
  className?: string;
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
