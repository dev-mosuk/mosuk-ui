import { InputHTMLAttributes, Ref } from 'react';

export interface UploadInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'disabled' | 'readOnly' | 'required'
> {
  ref?: Ref<any>;
  onChange?: (files: File[]) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}
