import type {
  InputVariant,
  InputWidth,
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
  variant?: InputVariant | `${InputVariant}`;
  size?: number;
  width?: InputWidth | `${InputWidth}`;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
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
    | 'width'
  >;
