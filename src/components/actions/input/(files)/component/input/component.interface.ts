import { InputHTMLAttributes, RefObject } from 'react';

export interface InputFilesInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  ref?: RefObject<HTMLInputElement | null>;
}
