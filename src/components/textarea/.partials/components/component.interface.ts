import type {
  TextareaAnimation,
  TextareaPress,
  TextareaVariant,
} from '@/components/textarea/.partials/enums/component.enums';
import type {
  CSSProperties,
  FocusEventHandler,
  PointerEventHandler,
  ReactNode,
  Ref,
} from 'react';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';

import type { PropsOf } from '@/types/props-of';

type TextareaOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: TextareaVariant | `${TextareaVariant}`;
  animation?: TextareaAnimation | `${TextareaAnimation}`;
  press?: TextareaPress | `${TextareaPress}` | false;
  minRows?: TextareaAutosizeProps['minRows'];
  maxRows?: TextareaAutosizeProps['maxRows'];
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isDanger?: boolean;
  isAutoSize?: boolean;
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

export type TextareaProps<C = 'textarea'> = TextareaOwnProps<C> &
  Omit<
    PropsOf<C>,
    | 'as'
    | 'ref'
    | 'disabled'
    | 'readOnly'
    | 'required'
    | 'aria-invalid'
    | 'style'
    | 'minRows'
    | 'maxRows'
    | 'onPointerDown'
    | 'onFocus'
    | 'onBlur'
    | 'id'
    | 'name'
    | 'className'
    | 'children'
  >;
