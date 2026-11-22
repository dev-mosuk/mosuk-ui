import { InputHTMLAttributes } from 'react';

export interface FileInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'disabled' | 'readOnly' | 'required'
> {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}
