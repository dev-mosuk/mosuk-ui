import type {
  InputAnimation,
  InputPress,
  InputVariant,
} from '@/components/input/.partials/enums/component.enums';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  Ref,
} from 'react';

type InputOwnProps = {
  as?: ElementType;
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
};

export type InputProps<C extends ElementType = 'input'> = Omit<
  InputOwnProps,
  'as'
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
  >;
