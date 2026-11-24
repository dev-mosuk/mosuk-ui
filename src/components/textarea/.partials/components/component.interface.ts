import type {
  TextareaAnimation,
  TextareaPress,
  TextareaVariant,
} from '@/components/textarea/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  Ref,
} from 'react';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';

type TextareaOwnProps = {
  as?: ElementType;
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
};

export type TextareaProps<C extends ElementType = 'textarea'> = Omit<
  TextareaOwnProps,
  'as' | 'minRows' | 'maxRows'
> & {
  as?: C;
} & Omit<
    ComponentPropsWithoutRef<C>,
    | 'as'
    | 'ref'
    | 'disabled'
    | 'readOnly'
    | 'required'
    | 'aria-invalid'
    | 'style'
  > &
  Pick<TextareaAutosizeProps, 'minRows' | 'maxRows'>;
