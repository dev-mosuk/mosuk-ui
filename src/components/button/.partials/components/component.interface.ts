import type {
  ButtonAnimation,
  ButtonFormat,
  ButtonPress,
  ButtonVariant,
} from '@/components/button/.partials/enums/component.enums';
import type { PropsOf } from '@/components/button/.partials/utilities/props-of';
import type { CSSProperties, PointerEventHandler, ReactNode, Ref } from 'react';

type ButtonOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  format?: ButtonFormat | `${ButtonFormat}`;
  variant?: ButtonVariant | `${ButtonVariant}`;
  animation?: ButtonAnimation | `${ButtonAnimation}`;
  press?: ButtonPress | `${ButtonPress}` | false;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
  isActive?: boolean;
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
    | 'className'
    | 'style'
    | 'disabled'
    | 'type'
    | 'onPointerDown'
    | 'children'
  >;
