import type { CheckboxVariant } from '@/components/checkbox/.partials/enums/component.enums';
import { Checkbox } from '@base-ui/react';

type CheckboxOwnProps = {
  variant?: CheckboxVariant | `${CheckboxVariant}`;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  onChange?: (isSelected: boolean) => void;
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
  >;
