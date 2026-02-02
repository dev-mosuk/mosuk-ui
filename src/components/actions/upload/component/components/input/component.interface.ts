import { InputHTMLAttributes, Ref } from 'react';

export interface UploadInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  ref?: Ref<any>;
  onChange?: (files: File[]) => void;
}
