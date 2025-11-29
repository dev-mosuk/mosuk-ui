import { InputHTMLAttributes, RefObject } from 'react';

export interface UploadFilesInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  ref?: RefObject<HTMLInputElement | null>;
}
