import type {
  InputAnimation,
  InputPress,
  InputVariant,
} from '@/components/input/.partials/enums/component.enums';
import type {
  CSSProperties,
  FocusEventHandler,
  PointerEventHandler,
  ReactNode,
  Ref,
} from 'react';

import type { PropsOf } from '@/types/props-of';

type InputOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: InputVariant | `${InputVariant}`;
  animation?: InputAnimation | `${InputAnimation}`;
  press?: InputPress | `${InputPress}` | false;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isDanger?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  style?: CSSProperties;
  /** @deprecated Use `isDisabled` */
  disabled?: never;
  /** @deprecated Use `isReadOnly` */
  readOnly?: never;
  /** @deprecated Use `isRequired` */
  required?: never;
  onPointerDown?: PointerEventHandler<any>;
  onFocus?: FocusEventHandler<any>;
  onBlur?: FocusEventHandler<any>;
  id?: string;
  name?: string;
  className?: string;
  children?: ReactNode;
};

export type InputProps<C = 'input'> = InputOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'disabled'
    | 'readOnly'
    | 'required'
    | 'aria-invalid'
    | 'style'
    | 'onPointerDown'
    | 'onFocus'
    | 'onBlur'
    | 'id'
    | 'name'
    | 'className'
    | 'children'
  >;
