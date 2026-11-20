import type { FormHTMLAttributes, ReactNode } from 'react';

export interface ChatComposerProps extends Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onSubmit' | 'onChange'
> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  disabled?: boolean;
  children?: ReactNode;
}
