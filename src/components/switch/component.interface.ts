import { InputHTMLAttributes, RefObject } from 'react';

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'defaultChecked' | 'disabled' | 'readOnly' | 'required'
> & {
  ref?: RefObject<HTMLInputElement | null>;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};
