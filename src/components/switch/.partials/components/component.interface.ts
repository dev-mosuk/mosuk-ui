import type { SwitchVariant } from '@/components/switch/.partials/enums/component.enums';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import type { CSSProperties } from 'react';

type SwitchOwnProps = {
  size?: number;
  variant?: SwitchVariant | `${SwitchVariant}`;
  defaultSelected?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  style?: CSSProperties;
  onChange?: (isSelected: boolean) => void;
};

export type SwitchProps = SwitchOwnProps &
  Omit<
    BaseSwitch.Root.Props,
    | 'checked'
    | 'defaultChecked'
    | 'disabled'
    | 'readOnly'
    | 'required'
    | 'onCheckedChange'
    | 'onChange'
    | 'style'
    | 'size'
  >;
