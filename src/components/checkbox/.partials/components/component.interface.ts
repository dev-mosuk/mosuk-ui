import type { CheckboxVariant } from '@/components/checkbox/.partials/enums/component.enums';
import { Checkbox } from '@base-ui/react';
import type { CSSProperties } from 'react';

type CheckboxOwnProps = {
  variant?: CheckboxVariant | `${CheckboxVariant}`;
  size?: number;
  isChecked?: boolean;
  defaultChecked?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  style?: CSSProperties;
  onChange?: (isChecked: boolean) => void;
};

export type CheckboxProps = CheckboxOwnProps &
  Omit<
    Checkbox.Root.Props,
    | 'checked'
    | 'defaultChecked'
    | 'disabled'
    | 'readOnly'
    | 'required'
    | 'indeterminate'
    | 'onCheckedChange'
    | 'onChange'
    | 'style'
    | 'size'
  >;
