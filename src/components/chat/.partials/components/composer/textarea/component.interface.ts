import type { TextareaHTMLAttributes } from 'react';

export interface ChatComposerTextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'defaultValue' | 'onChange'
> {
  minRows?: number;
  maxRows?: number;
}
