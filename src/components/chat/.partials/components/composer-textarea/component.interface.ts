import type { TextareaHTMLAttributes } from 'react';

export interface ChatComposerTextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'defaultValue' | 'onChange' | 'disabled' | 'readOnly' | 'required'
> {
  minRows?: number;
  maxRows?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}
